import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">You're Guys Invited!</h2>
            <p className="info">Assalamu’alaikum warahmatullahi wabarakatuh. Salam sejahtera bagi kita semua.</p>
            <p className="info">
              Teman-teman dan sahabat-sahabat sekalian yang saya cintai. Pada kesempatan yang berbahgia ini, perkenankan
              saya mengajak teman-teman sekalian untuk memanjatkan puji syukur kepada Tuhan Yang Maha Kuasa, karena atas
              rahmat dan perkenan-Nya, kita semua dapat hadir dan berkumpul di tempat ini, dalam rangka memperingati
              acara ulang tahun yang ke 21.
            </p>
            <p>Semoga di Berikan kelancaran dan keberkahan. Amiin..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
