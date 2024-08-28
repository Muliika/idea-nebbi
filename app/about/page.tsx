import React from "react";

const page = () => {
  return (
    <div className="relative bg-black">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/aboutus.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            {/* <h2 className="font-semibold leading-6 text-indigo-600">Everything you need t know</h2> */}
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
              About Us
            </h3>
            <p className="mt-8 text-lg text-white">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
            <div className="prose prose-indigo mt-5 text-white">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem
                nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet
                quam urna.
              </p>
              <p>
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem
                pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non
                gravida lectus dignissim imperdiet a.
              </p>
              <p>
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus,
                egestas netus cursus. In.
              </p>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies.
                Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum
                consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
              <h3 className="text-blue-800">How we&apos;re different</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in
                volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus
                adipiscing lacus, eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius
                non nunc orci. Eu, mi neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus
                id sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac eros, diam mauris,
                tortor. Risus id sit molestie magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
