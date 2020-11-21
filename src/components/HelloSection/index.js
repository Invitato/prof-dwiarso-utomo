import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import UDINUS_LOGO from '../WelcomeSection/img/udinus.png';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  return (
    <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <img src={UDINUS_LOGO} alt="logo udinus" />
            <p className="info" style={{ fontSize: '1.4em' }}>
              <strong>REKTOR UNIVERSITAS DIAN NUSWANTORO</strong>
            </p>
            <p className="info">
              Mengharap dengan hormat Bapak /Ibu / Saudara untuk menghadiri Sidang Senat Terbuka Universitas Dian
              Nuswantoro, dalam rangka: Pengukuhan dan Orasi Ilmiah:
            </p>
            <p className="info" style={{ fontSize: '1.5em' }}>
              <strong>Prof. Dr. St. Dwiarso Utomo, S.E., M.Kom., Akt., CA.</strong>
              <br />
              Guru Besar Bidang Ilmu Akuntansi
            </p>
            <p className="info">
              Yang akan diselenggarakan pada: <br />
              Hari / Tanggal : Rabu / 25 November 2020 <br />
              Waktu : 07.30 – 11.30 WIB <br />
              Tempat : Daring melalui ZOOM meeting{' '}
              <a
                className="link"
                href="https://us02web.zoom.us/j/88174841488?pwd=YzhvVHlKdHlUNEFmTG01ZE1iWk1qUT09"
                target="_blank"
                rel="noreferrer"
              >
                (LINK ZOOM)
              </a>
              <br />
              Meeting ID: 881 7484 1488 <br />
              Passcode: 343088 <br />
            </p>
            <p className="info">Atas perhatian dan kehadiran Bapak / Ibu / Saudara diucapkan terima kasih.</p>
            <p className="info">
              Semarang, 15 November 2020 <br />
              Rektor, <br /> <strong>Prof. Dr. Ir. Edi Noersasongko, M.Kom.</strong>
            </p>
            <hr />
            {/* NOTES FROM OWNER */}
            <p className="notes">Catatan :</p>
            <ol className="notes">
              <li>
                Mohon Senat Universitas Dian Nuswantoro dan Senat Tamu dapat mengenakan Toga, dan untuk tamu undangan
                lain dapat menyesuaikan.
              </li>
              <li>
                Dimohon Tamu undangan daring diharapkan dapat bergabung pada link zoom tersebut diatas pada jam
                07.30-08.45 karena pada saat prosesi senat berlangsung link zoom akan ditutup.
              </li>
            </ol>
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
