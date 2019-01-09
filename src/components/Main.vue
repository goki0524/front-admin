<template>
	<el-main>
		<h1>Cats</h1>
		<el-table
		:data="cats"
		style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<p>Age: {{ props.row.age }}</p>
					<p>Breed: {{ props.row.breed }}</p>
					<p>Gender: {{ props.row.gender }}</p>
				</template>
			</el-table-column>
			<el-table-column
			label="ID"
			prop="id">
			</el-table-column>
			<el-table-column
			label="Name"
			prop="name">
			</el-table-column>
			<el-table-column
			align="right">
				<template slot-scope="scope">
					<el-button
					size="mini"
					@click="editCat(scope.row)">Edit</el-button>
					<el-button
					size="mini"
					type="danger"
					@click="deleteCat(scope.row)">Delete</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-button type="primary" round @click="dialogFormVisible = true">Add Cat</el-button>
	</el-main>
	
</template>