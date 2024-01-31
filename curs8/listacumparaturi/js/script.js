let nrProduse=0
function addProduct(){
    let product=document.getElementById('product').value
    if(!product)
        return
        const text="<li class='product'>"+ product+"<span id='"+nrProduse+"'>Sterge</span></li>"
        document.getElementById('list').insertAdjacentHTML('beforeend',text)
        document.getElementById('product').value=''
        nrProduse=nrProduse+1
        if(typeof(Storage)!=='undefined'){
            localStorage.setItem(nrProduse,text)
            localStorage.setItem('numarProduse',nrProduse)
        }
    
}
document.getElementById('add').addEventListener('click',addProduct)
document.getElementById('list').addEventListener('click',function(event){
    const element=event.target
    element.classList.toggle('done')
})