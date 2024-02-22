import '../style/section.css'

export function Juicy(){
return(
    <section className="juicy" id="juicy">
      <article>
        <h1>Juicy</h1>
        <p class="p-1">Ripe fruit - freshly squeezed.</p>
        <p class="p-2">It's as simple as that. Chunky or smooth - it's your choice.</p>
        <div class="box">
          <div class="row">
            <span>Branched Apricots</span>
            <span>€ 4.20</span>
          </div>
          <div class="row"><span> Deep Rasberries</span> <span>€ 3.50</span></div>
          <div class="row"><span>Smooth Oranges</span> <span>€ 6.50</span></div>
        </div>
      </article>
    </section>
);
}