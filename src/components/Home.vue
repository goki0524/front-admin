<template>
   <Aside/>
   <Header/>
   <Main/>
</template>


<script>
import Aside from './components/Aside.vue'
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'home',
  components: {
    Aside,
    Header,
    Main,
  },
  data:{
		users:[],
		user:{
			id:'',
			name:'',
			age:'',
            address:'',
            gender:''
		},
		dialogFormVisible: false,
		formLabelWidth: '120px'
	},
	created:function() {
		this.getUsers();
	},
	methods:{
		handleInfo:function(index, row) {
			console.log('index', index);
			console.log('row', row);
		},
		getUsers:function() {
			fetch(API)
			.then(res => res.json())
			.then(res => this.users = res);	
		},
		storeUser:function() {
			let method;
			console.log('storeUser', this.cat);
			// Handle new vs old
			if(this.user.id === '') {
				delete this.user.id;
				method = 'POST';
			} else {
				method = 'PUT';
			}
			fetch(API, {
				headers:{
					'Content-Type':'application/json'
				},
				method:method,
				body:JSON.stringify(this.user)
			})
			.then(res => res.json())
			.then(res => {
				this.getUsers();
				this.dialogFormVisible = false;
				this.successNotice(this.user);
				this.reset();
			});
		},
		deleteUser:function(row) {
			fetch(API + row.id, {
				headers:{
					'Content-Type':'application/json'
				},
				method:'DELETE'
			})
			.then(res => res.json())
			.then(res => {
				this.getUsers();
			});

			// call reset cuz the cat could be 'active'
			this.reset();
			// delete row;
		},
		editUser:function(row) {
			/*
			This line was bad as it made a reference, and as you typed, it updated
			the list. A user may think they don't need to click save.
			this.cat = c;
			*/
			this.dialogFormVisible = true;
			this.user.id = row.id;
			this.user.name = row.name;
			this.user.age = row.age;
			this.user.address = row.address;
			this.user.gender = row.gender;
		},
		reset:function() {
			this.user.id = '';
			this.user.name = '';
			this.user.age = '';
			this.user.address = '';
			this.user.gender = '';
		},
		successNotice:function(user) {
			this.$notify({
				title: 'Success',
				message: 'Added  ' + user.name,
				type: 'success'
			});
		}
	}
}
</script>