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