function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    circle(30, 30, 50);
    circle(610,30,50);
    rect(35,30,580,40)
    
}

function take_snapshot() {
    save('student_name.png')
}


