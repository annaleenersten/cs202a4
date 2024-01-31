var i=0;

function setup() {
    createCanvas(600, 600);
    frameRate(12);
}

function draw(){
    if(i<600){

    i=i+1;
    for (var j=0; j<i; j++){
        background(220);

        push();
        fill(163, 31, 31);
        triangle(610-i, -20+i, 250-j, 400+j, 650-i, 700+i);
        pop();

        push();
        fill(46, 44, 44);
        triangle(250+i, 600-i, 250+j, -50-j, -75+i, 300-i);
        pop();

        push();
        fill(158, 155, 155);
        triangle(0-i, 0+i, 203-j, 0+j, 0-i, 219+i);
        pop();

        push();
        fill(158, 155, 155);
        triangle(250+i, 400+i, 515+j, 600-j, 250+i, 600+i);
        pop();

        push();
        fill(230, 223, 223);
        triangle(250-j, 400-j, 450-i, 168-j, 250+j, -100+j);///// flips////////
        pop();

        push();
        fill(125, 122, 122);
        triangle(450+j, 168-j, 593+i, 0-i, 325+j, 0-j);
        pop();

        push();
        fill(191, 180, 80);
        triangle(0+i, 590+i, 0+j, 370+j, 120+i, 480+i); ///yellow
        pop();

        push();
        fill(227, 227, 222);
        triangle(-10-i, 600+i, 120-j, 480+j, 249+j, 600+j);
        pop();
    }
}
}

function mouseClicked(){
    background(220);
    fill(163, 31, 31);
    triangle(610, -20, 250, 400, 650, 700);
    fill(46, 44, 44);
    triangle(250, 600, 250, -50, -75, 300);
    fill(158, 155, 155);
    triangle(0, 0, 203, 0, 0, 219);
    fill(158, 155, 155);
    triangle(250, 400, 515, 600, 250, 600);
    fill(230, 223, 223);
    triangle(250, 400, 450, 168, 250, -100);
    fill(125, 122, 122);
    triangle(450, 168, 593, 0, 325, 0);
    fill(191, 180, 80);
    triangle(0, 590, 0, 370, 120, 480);
    fill(227, 227, 222);
    triangle(-10, 600, 120, 480, 249, 600);

    i=600;
}