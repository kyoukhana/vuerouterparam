<template>
    <h1>Users</h1>

    <nav>
        <ul>
            <li><a v-link="{path: '/users'}">Users Home</a></li>
            <li><a v-link="{path: '/users/add'}">Add</a></li>
            <li><a v-link="{path: '/users/view'}">View</a></li>
           <!--- <li><a v-link="{path: '/users/edit'}">Edit</a></li>-->
            <li><a v-link="{name:'edituser', params: { userid: 123 }}">Edit</a></li>

        </ul>
    </nav>
    <h1>sub route</h1>
    <router-view></router-view>
</template>

<script>
    export default{}
</script>