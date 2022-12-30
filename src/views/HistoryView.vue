<template>
    <body class="bg-clr">
      
        <div class="container">
            <div class="box-div">

                <router-link class="btn btn-success " to="/">
                    Back
                </router-link>
                
                <table class="table mt-30">
                    <thead class="thead-dark">
                        <tr>
                            <th>S.No.</th>
                            <th>Equation </th>
                            <th>Result </th>
                        </tr>
                    </thead>
                    <template  v-for="(rdata,key) in resultData">
                        <tr :key="key">
                            <td>
                                {{ (key+1) }}
                            </td>
                            <td>
                                {{ rdata.equation_string }}
                            </td>
                            <td>
                                {{ rdata.result }}
                            </td>
                        </tr>
                    </template>
                </table>
            </div>
            
        </div>
    
    </body>
    </template>
    
    <script>
    import axios from "axios";
    
    export default {
        components: {
           
        },
        data() {
            return {
               resultData: this.$store.state.historyData,
            };
        },
    
        mounted() {
           
    
        },
        methods: {
            
        },
    };
    </script>
    
    <style>
    </style>
    