
let tab1Content = document.getElementById('tab-1-content');
let tab2Content = document.getElementById('tab-2-content');
let tab3Content = document.getElementById('tab-3-content');

let tab1 = document.getElementsByClassName('tab-1');
let tab2 = document.getElementsByClassName('tab-2');
let tab3 = document.getElementsByClassName('tab-3');


function tabContentHandler1(){
    tab1Content.style.display='block';

    tab1[0].style.borderBottom = '5px solid red';
    

    tab2[0].style.borderBottom ='0px solid';
    tab3[0].style.borderBottom ='0px solid';
    tab2Content.style.display='none';
    tab3Content.style.display='none';

}

function tabContentHandler2(){
    tab2[0].style.borderBottom = '5px solid red';
    tab2Content.style.display='block';

    tab1[0].style.borderBottom ='0px solid';
    tab3[0].style.borderBottom ='0px solid';
    tab1Content.style.display='none';
    tab3Content.style.display='none';

}
function tabContentHandler3(){
    tab3[0].style.borderBottom = '5px solid red';
    tab3Content.style.display='block';

    tab2[0].style.borderBottom ='0px solid';
    tab1[0].style.borderBottom ='0px solid';
    tab2Content.style.display='none';
    tab1Content.style.display='none';

}


const videoCardsList = [...document.querySelectorAll('.video-card')];

function play(){
    videoCardsList.forEach(item =>{
        item.addEventListener('mouseover',()=>{
            let video = item.children[1];
            video.play()
        })

        item.addEventListener('mouseleave',()=>{
            let video = item.children[1];
            video.pause();
        })

    });
}



var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
            console.log(parent);
			var clone = parent.cloneNode(true);
            console.log(clone);
			select.appendChild(clone);
            console.log(select)
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	
