import "../style/section.css";

export function Cosy() {
  return (
    <section className="cosy" id="cosy">
      <article>
        <h1>Cosy</h1>
        <p class="p-1">Hang around. Enjoy the settings.</p>
        <p class="p-2">Use our fast WiFi. Borrow a newspaper or a novel.</p>
        <div class="box">
          <div class="row">
            <span>Mon-Sun </span>
            <span>8am – 11pm</span>
          </div>
          <div class="row">
            <span>Caffe Retro</span> <span>Canto VI</span>
          </div>
          <div class="row">
            <span>0123-45 67 89</span> <span>caffe@lorem.pge</span>
          </div>
        </div>
      </article>
    </section>
  );
}
