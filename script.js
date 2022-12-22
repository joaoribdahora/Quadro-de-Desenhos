//Initial Data
let currentColor = 'black';
let canva = document.querySelector('#tela');
let context = canva.getContext('2d');
let draw = false;
let mouseX = 0;
let mouseY = 0;


//Elements and Events

//Vai pegar todos os elementos que tem a class "color" dentro do elemento de class "colorArea"
document.querySelectorAll('.colorArea .color').forEach( item => {
    item.addEventListener('click', changeColor);
})

//Eventos de click do mouse para poder desenhar
canva.addEventListener('mousedown', mouseDownClick);
canva.addEventListener('mousemove', mouseMoveClick);
canva.addEventListener('mouseup', mouseUpClick);

//Limpar o quadro
document.querySelector('.clear').addEventListener('click', clearAll);


//Functions

function changeColor(e){
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');        
}

function mouseDownClick(e){
    draw = true;
    mouseX = e.pageX - canva.offsetLeft;
    mouseY = e.pageY - canva.offsetTop;
}
function mouseMoveClick(e){
    
    if(draw){
        canDraw(e.pageX, e.pageY);
    }
}
function mouseUpClick(){
    draw = false;
}

function canDraw(x, y){
    let pointX = x - canva.offsetLeft;
    let pointY = y - canva.offsetTop;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = 'round';
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearAll(){
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}