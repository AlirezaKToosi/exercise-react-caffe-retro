import '../style/section.css'

export function Hot(){
return(
    <section className="hot" id="hot">
      <article>
        <h1>Hot</h1>
        <p class="p-1">Hot freshly ground black coffee or a cup of exquisite tea?</p>
        <p class="p-2">We give you that perfect cup every time.</p>
        <div class="box">
          <div class="row">
            <span>Mocha Latte</span>
            <span>€ 7.50</span>
          </div>
          <div class="row"><span>Caffe Formaggio</span> <span>€ 5.00</span></div>
          <div class="row"><span>Espresso</span> <span>€ 3.50</span></div>
          <div class="row"><span>Chai Verde Latte</span> <span>€ 5.50</span></div>
        </div>
      </article>
    </section>
);
}