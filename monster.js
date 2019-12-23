new Vue(
{
el:"#devil",
data:{
    ywidth:400,
    yheight:40,
    yrwid:400,
    ycolor:'green',
    mwidth:400,
    mheight:40,
    mrwid:400,
    show:false,
    i:95,
    ix:99,
    hy:40,
    hm:40,
    counter:5

},
computed: {
    mystyle:function()
    {
        return {
backgroundColor: this.ycolor,
width: this.ywidth+'px',
height: this.yheight+'px',
borderRadius: 20+'px'
        };
    },
    monsterstyle:function()
        {
            return {
    backgroundColor: this.ycolor,
    width: this.mwidth+'px',
    height: this.mheight+'px',
    borderRadius: 20+'px'
  
};
        }
    
},
methods:
        {
            attack:function(){
                this.ywidth=this.ywidth*(this.i/100);
                this.i=this.i-7;
                this.mwidth=this.mwidth*(this.ix/100);
                this.ix=this.ix-8;

                this.yrwid= this.ywidth,
                this.mrwid= this.mwidth;

                


                this.counter--;
                if(this.counter==0)
                {
                    if(this.yrwid <= this.mrwid)
                    {
                        alert("You Have Lost the Game..");
                    }
                    else{
                        alert("You Have Won the Game..")
                    }
                    window.location = "http://127.0.0.1:5500/monster_game.html";
                }
            },
            specialattack:function(){
                this.i=this.i-11;
                this.ywidth=this.ywidth*(this.i/100);
                this.ix=this.ix-9;
                this.mwidth=this.mwidth*(this.ix/100);
                this.yrwid= this.ywidth,
                this.mrwid= this.mwidth;
                
                this.counter--;
                if(this.counter==0)
                {
                    if(this.yrwid <= this.mrwid)
                    {
                        alert("You Have Lost the Game..");
                        // location("monster_game.html");
                    }
                    else{
                        alert("You Have Won the Game..")
                        // location("monster_game.html");
                    }
                    window.location = "http://127.0.0.1:5500/monster_game.html";
                }

            },
            heal: function(){

                
                    this.ywidth=this.ywidth*(1.20);
                        
                    this.mwidth=this.mwidth*(1.12);
                

                    if(this.ywidth>400)
                    {
                        this.ywidth=400;
                    }

                    if(this.mwidth>400)
                    {
                        this.mwidth=400;
                    }
                
                this.yrwid= this.ywidth,
                this.mrwid= this.mwidth;
                
                this.counter--;
                if(this.counter==0)
                {
                    if(this.yrwid <= this.mrwid)
                    {
                        alert("You Have Lost the Game..");

                    }
                    else{
                        alert("You Have Won the Game..")
                    }
                    window.location = "http://127.0.0.1:5500/monster_game.html";
                }


            },

            giveup:function()
            {

                this.ywidth=400,
                this.mwidth=400,
                this.ix=99,
                this.i=95
                this.yrwid= this.ywidth,
                this.mrwid= this.mwidth,
                this.counter=5


            }


        }  

}

);




