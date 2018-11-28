var wordFir = `/*We can simpliy start with a ...*/
*{ 
    margin: 0;
    padding: 0;
    transition: all 1s;
}

/*
* Beautiful, Lovely
* 来点背景？
*/
body{
    background: rgb(63,82,99);
}

/*
* Oops!字看不见了~
*/
pre{
    color: white;
}

/*
* 高亮点代码？
*/

`;

var wordSec = `
/*
* Better?
*/
.token.property{color: #ff5db7;}

/*Better!!*/

/*
* Marvelous!!
* Another thing:圈地为王是必要的！！我的我的都是我的！
*/
body{
    overflow: hidden;
}

#content{
    background: rgb(48, 48, 48);
    border: 1px solid #ccc;
    width: 48%;
    height: 91vh;
    overflow: auto;
    font-size: 14px;
    padding: 10px 10px 20px;
    box-shadow: 6px 6px 2px 0 rgba(0,0,0,0.3);
    margin: 10px;
}

/*
* 2D有点平淡了，3D才酷炫！
*/
#content{
    transform: rotateY(5deg);
    transform-origin: left;
}

/*
* WHAT!!没反应？试试这样？
*/
body{
    perspective: 1000px;
}

/*
* OK 对现在来说很酷了，但我是谁呢？
* 没错！我是蝙蝠侠！！
*     ︵︵ 
* ("\\(●-●)
* \\ /    0\\ \\
*  (       )"
*   \\__T__/
* Nono, not the stupid up there.Look right.
*/
#display{opacity: 1;}

/*
* Nope!That\`s not me!
*/
#display > #img{
    background: url(./img/batman-3.jpg);
    background-size: 100% 100%;
}

/*
* That\`s more like me~
*/
#display > #img{
    background: url(./img/batman-2.jpg);
    background-size: 100% 100%;
}

/*
* That\`s me for sure!
*/

/*
* OK, i know i am super no doubt, but let\`s put it aside for now.
*/
body{display: flex;}

#display{
    width: 48%;
    height: 55vh;
    margin-right: 13px;
    right: 0;
    bottom: 0;
    transform: rotateY(-5deg);
    transform-origin: right;
}

/*
* Oh boy, back to the stage
*/
#intro{opacity: 1;}
`;

var wordThird=`
/*
* MY NAME is B-r-u-c-c W-a-y-n-e,
* Well, but you know, everybody calls me the B-a-t-m-a-n!!!
* Ok, you may get rid of t-h-e
* everybody calls me BATMAN !!!
*/

/*
* What the ****!!
* That\`s my personal information!!!
* How did you? How can you? How dare you!
* Is that legal?
* Well, never mind, i have those times sometimes.
*/

/*
* Anyway that\`s all about me.
* But why don\`t we make it prettier.
*/
#intro > h1{
    color: #ddd;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin: 18px 50px 0 18px;
}

#intro > p{
    font-size: 20px;
    margin-left: 50px;
}

#intro > p > span{
    font-weight: bold;
}

#content:hover,
#display:hover,
#intro:hover{
    box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

/*
* Well well, this could be the real end.
* What do i care?
* HaHaHaHaHa~~~~
*/
`;

var wordIntro =`
<h1>PROFILE</h1>
<p><span>name:</span> Batman</p>
<p><span>birth:</span> 1939-5</p>
<p><span>e-mail:</span> phil_huangguorong@163.com</p>

<h1>Villians</h1>
<p>Joker</p>
<p>Bane</p>
<p>Two-face</p>

<h1>Relationship</h1>
<p><span>wife:</span> Catwoman</p>
<p><span>butler:</span> Alfred</p>
`;