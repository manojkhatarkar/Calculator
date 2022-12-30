<template>
    <body class="bg-clr">
       
        <div class="container-fluid">
            <div class="box-div">
               
                <div class="row m-row">
                    <div class="col-md-4 offset-md-4 padding-remove">
                        <div :class="changeTheme?'light-theme  box-sty':'dark-theme  box-sty'">
                            
                            <div class="button-area-box h-70 w-100">

                                <div class="type-text-area h-20 w-100 ">
                                    <div class="show-result-box">
                                        <div class="result-text">
                                            <span>{{result}}</span>
                                        </div>
                                    </div>
                                    <textarea class="w-100 txt-end remove-pointer textarea-style" row="5" disabled v-model="equation_string" ></textarea>

                                  </div>
                                 <div class="row p-15">
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="clear">AC</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="del"><i class="fa-solid fa-delete-left"></i></button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterOps(4)"><i class="fa-solid fa-divide"></i></button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterOps(3)">x</button>
                                     </div>
             
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(1)">1</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(2)">2</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(3)">3</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterOps(2)">-</button>
                                     </div>
             
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(4)">4</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(5)">5</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(6)">6</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterOps(1)">+</button>
                                     </div>
             
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(7)">7</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(8)">8</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(9)">9</button>
                                     </div>
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="enterNum(0)">0</button>
                                     </div>
             
                                     <div class="col-3 padding-unset">
                                         <button class="btn btn-cal" @click="addDecimal">.</button>
                                     </div>
             
                                     <div class="col-9 padding-unset">
                                         <button class="btn equal-btn" @click="sum">=</button>
                                     </div>

                                     <div class="col-12 padding-unset">
                                        <router-link class="btn equal-btn" to="/history">See History</router-link>
                                    </div>

                                    <div class="col-4" @click="changeTheme=!changeTheme">
                                        <div class="btn equal-btn">
                                            <i class="fa-solid fa-circle-half-stroke"></i>
                                            
                                        </div>   
                                    </div>
                                 </div>
                            </div>
                         </div>
                    </div>
                </div>

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
                equation:'',
                checkAry:[1,2,3,4,5,6,7,8,9,0,'.','+','-','*','/','='],
                result:'',

                historyArray:[],
                equation_string:'',

                currentNum: 0,
                decimalAdded: false,
                total: 0,
                prevOps: 0,
                display: '',
                changeTheme:true,
            };
        },
        watch:{
            historyArray: function (vl){
                this.equation_string='';
                vl.forEach((value, index) => {
                    this.equation_string+=value;
                })
            }
        },
    
        mounted() {
            
        },
        methods: {
          
            addDecimal: function() {
                if (this.decimalAdded == false) {
                    if (this.prevOps != 0) {
                        this.display = '0.';
                        this.historyArray.push(this.display)
                    } else {
                        this.display += '.';
                        this.historyArray.push('.')
                    }
                    this.decimalAdded = true;
                }
            },
            clear: function() {
                    this.currentNum = 0;
                    this.decimalAdded = false;
                    this.total = 0;
                    this.display = '';
                    this.prevOps = 0;
                    this.historyArray=[];
                    this.equation_string='';
                    this.result='';
            },
            del: function() {
              
                if (this.currentNum > 0) {
                    if (this.decimalAdded == false) {
                        this.currentNum = parseInt(this.currentNum.toString().slice(0, -1), 10);
                        this.historyArray.pop()
                    } else {
                        this.currentNum = parseFloat(this.currentNum.toString().slice(0, -1));
                        this.historyArray.pop()
                    }

                    if (isNaN(this.currentNum))
                    this.currentNum = 0;
                    this.display = this.currentNum;
                } else if (this.currentNum == 0) {
                    this.display = '';
                    this.result= '';
                }
            },
            enterNum: function(val) {
                if (this.currentNum == 0) {
                    if (this.prevOps == 0)
                        this.total = 0;

                    if (this.decimalAdded == true) {
                        this.currentNum = val / 10;
                        this.display += val.toString();
                        this.historyArray.push(val.toString());
                    } else {
                        this.currentNum = val;
                        this.display = val.toString();
                        this.historyArray.push(val.toString());
                    }
                } else {
                    if (this.decimalAdded == true) {
                        if (this.currentNum.toString().indexOf('.') == -1) {
                            this.currentNum = parseFloat(this.currentNum.toString() + '.' + val.toString());
                        } else {
                            this.currentNum += val.toString();
                            this.currentNum = parseFloat(this.currentNum);
                        }
                    } else {
                        this.currentNum *= 10;
                        this.currentNum += val;
                    }
                    this.display += val.toString();
                    this.historyArray.push(val.toString());
                }
            },
            enterOps: function(ops) {
                if (this.total == 0 && this.currentNum == 0) {
                    return;
                }
                if (this.total == 0) {
                    this.total += this.currentNum;
                }
                
                let opsVal='';
                    if(ops==1){
                        opsVal='+'
                    }else if(ops==2){
                        opsVal='-'
                    }else if(ops==3){
                        opsVal='x'
                    }else if(ops==4){
                        opsVal="/"
                    }

                if(this.currentNum==0 && this.prevOps>0){
                    let len=this.historyArray.length;
                    
                    this.historyArray.splice((len-1),1,opsVal)

                }else if(this.currentNum>0 && this.prevOps==0){
                    this.historyArray.push(opsVal)
                }else if(this.currentNum>0 && this.prevOps>0){
                    this.historyArray.push(opsVal)
                }

                switch (this.prevOps) {
                    case 1:
                        this.total += this.currentNum;
                        
                    break;
                    case 2:
                        this.total -= this.currentNum;
                       
                        
                    break;
                    case 3:
                        this.total *= this.currentNum;
                        
                    break;
                    case 4:
                        this.total /= this.currentNum;
                      
                    break;
                    case 0:
                    break;
                }

                if (this.decimalAdded == true) {
                    this.decimalAdded = false;
                }
                this.currentNum = 0;
                this.prevOps = ops;
            },
            sum: function() {
                switch (this.prevOps) {
                    case 1:
                    this.total += this.currentNum;
                    break;
                    case 2:
                    this.total -= this.currentNum;
                    break;
                    case 3:
                    this.total *= this.currentNum;
                    break;
                    case 4:
                    this.total /= this.currentNum;
                    break;
                    case 0:
                    break;
                }
                this.display = this.total.toString();
                this.result = this.total.toString();
                this.prevOps = 0;
                this.currentNum = 0;

                this.$store.state.historyData.push({ equation_string: this.equation_string, result: this.result})
                this.equation_string='';
                this.historyArray=[];

            }



        },
    };
    </script>
    
    <style>
    </style>
    