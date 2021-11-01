// const container = document.querySelector('.container');
const container = document.getElementsByClassName('container');
console.log(container);
// container[0].style.left = 50% - container.width/2 + 'px';
// container[0].style.left = '50px';

function setSizeSvg (){
    // const textSizes = textSvg.getBBox();
    const textSizes = textSvg.getBoundingClientRect();
    // const textWidth = textSvg.clientWidth;
    const svgWidth = textSizes.width + 10;
    const svgHeight = textSizes.height * 2;

    svg.setAttribute('width', svgWidth);
    svg.setAttribute('height', svgHeight);

    const textY = svg.attributes.height.value / 2 + textSizes.height / 3;
    // const textY = svg.attributes.height.value / 2;
    textSvg.setAttributeNS(null, 'y', textY);

    svg.setAttributeNS(null, 'viewbox', '0 0 ' + svgWidth +' ' + svgHeight);
    svg.setAttributeNS(null, 'preserveAspectRatio', 'none');

    
    const containerLeft = container[0].parentElement.clientWidth / 2 - svg.attributes.width.value / 2 + "px";
    container[0].style.left = containerLeft; 
}

function changeLetterSpace (letterSpace) {
    tspanSvg.setAttributeNS(null, 'letter-spacing', letterSpace);
    setSizeSvg();
}

let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
// svg.setAttribute('width', '400');
// svg.setAttribute('height', '400');

// svg.setAttributeNS(null, 'x', '50');
// svg.setAttributeNS(null, 'y', '50');

let textSvg = document.createElementNS('http://www.w3.org/2000/svg', 'text');
// textSvg.setAttributeNS(null, 'x', '0');
textSvg.setAttributeNS(null, 'x', '5');
textSvg.setAttributeNS(null, 'y', '50%');
// textSvg.setAttributeNS(null, 'width', '100%');
// textSvg.setAttributeNS(null, 'height', 'auto');
textSvg.setAttributeNS(null, 'font-size', '20');


let tspanSvg = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
// tspanSvg.setAttribute('height', '40');
// textSvg.innerHTML = 'Привет';
tspanSvg.innerHTML = 'Привет';

textSvg.appendChild(tspanSvg);
svg.appendChild(textSvg);

container[0].appendChild(svg);

// console.log(svg);

setSizeSvg();

$('.container').resizable(
    {
        resize: function (event, ui) {
            svg.setAttribute('width', ui.size.width);
            svg.setAttribute('height', ui.size.height);
            // svg.setAttribute('viewbox', '0 0 ' + ui.size.width +' ' + ui.size.height);
        },
        stop: function (event, ui) {
            console.log(event);
            console.log(ui);
        }
    }
);
// $('text').resizable();