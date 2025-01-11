/* animete mausehover */

const effectOpacity = document.querySelector(".app-container")

/* quando dentro do elemento opacity 1 */
effectOpacity.addEventListener('mouseover', (e)=>{
  e.stopPropagation
  effectOpacity.classList.add('show-before');
  console.log(effectOpacity)


})

/* quando fora do elemento opacity 0.5 */
effectOpacity.addEventListener('mouseout', (e)=>{
  e.stopPropagation
  effectOpacity.classList.remove('show-before');
  console.log(effectOpacity)
})


/* 
<li class="item-text">
  <button type="button"><img src="img/check.png" alt="ok"></button> 
  <span>asçdlkfjasdf</span> 
  <button type="button"><img src="img/clear.png" alt="clear"></button>
</li>
 */