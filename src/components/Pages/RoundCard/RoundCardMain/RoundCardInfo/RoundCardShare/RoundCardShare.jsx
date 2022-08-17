import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share';
import Twitter from '../../../../../../svg/twitter.svg';
import Facebook from '../../../../../../svg/facebook.svg';
import Pinterest from '../../../../../../svg/pinterest.svg';
import Viber from '../../../../../../svg/viber.svg';
import Telegram from '../../../../../../svg/telegram.svg';
import Whatsapp from '../../../../../../svg/whatsapp.svg';

const RoundCardShare = () => {
  const link = 'google.com';

  return (
    <ul className="card-share__list">
      <li className="card-share__item">
        <FacebookShareButton url={link} className="card-share__button">
          <Facebook className="share-icon" />
        </FacebookShareButton>
      </li>
      <li className="card-share__item">
        <TwitterShareButton url={link} className="card-share__button">
          <Twitter className="share-icon" />
        </TwitterShareButton>
      </li>
      <li className="card-share__item">
        <TelegramShareButton url={link} className="card-share__button">
          <Telegram className="share-icon" />
        </TelegramShareButton>
      </li>
      <li className="card-share__item">
        <ViberShareButton url={link} className="card-share__button">
          <Viber className="share-icon" />
        </ViberShareButton>
      </li>
      <li className="card-share__item">
        <WhatsappShareButton url={link} className="card-share__button">
          <Whatsapp className="share-icon" />
        </WhatsappShareButton>
      </li>
      <li className="card-share__item">
        <PinterestShareButton url={link} className="card-share__button">
          <Pinterest className="share-icon" />
        </PinterestShareButton>
      </li>
    </ul>
  );
};

export default RoundCardShare;
