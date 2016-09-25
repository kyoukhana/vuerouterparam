# Vue Router Params Lazy Loading 

### Run the following command
```
npm install
webpack
webpack-dev-server 
```
With your favourite browser go to http://localhost:8080

Once you have completed the following above.  Please navigate to users
users edit.  the issue is that I can't seem to get the user id from the v-link url in 

```
<li><a v-link="{name:'edituser', params: { userid: 123 }}">Edit</a></li>
```


Userid is defined in the route

```
'/edit:userid':{
    name:"edituser",
    userid:'',
    component: (resolve) => { require(['./components/views/users/edit.vue'], resolve); }
}
```

In the following path I can't output the value of userid

/js/components/views/users/edit.vue
```
<template>
    <h1>Edit User</h1>
    <p>
        Edit User Content
    </p>
</template>

<script>
    export default{
        ready: function () {


            /*Outputs undefined*/
            console.log(this.$route.params.userid);

        }


    }
</script>
```

Please note this repo is for troubleshooting the issue for variable parms in routes.

