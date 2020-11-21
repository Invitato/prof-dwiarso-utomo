import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Vessel Barber Shop & Monobar Cafe</strong>
                </a>
                <br />
                Jl. Cirendeu Tengah No.3, Pisangan, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.33156694396!2d106.7688804!3d-6.3183911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5754efab0a7a823d!2sVessel%20Barber%20Shop%20%26%20Monobar%20Cafe!5e0!3m2!1sen!2sid!4v1604909889071!5m2!1sen!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
