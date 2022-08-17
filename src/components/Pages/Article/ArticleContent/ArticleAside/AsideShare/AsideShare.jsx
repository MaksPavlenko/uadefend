import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from 'react-share';

import ArrowIcon from '../../../../../../svg/share_arrow.svg';

const AsideShare = () => {
  const link = 'https://volonteer.com.ua/';
 
  return (
    <ul className="aside-share__list">
      <li className="aside-share__item">
        <FacebookShareButton url={link}>
          <span className="aside-share__item--title">Facebook</span>
          <span className="aside-share__item--icon">
            <ArrowIcon />
          </span>
        </FacebookShareButton>
      </li>
      <li className="aside-share__item">
        <TwitterShareButton url={link}>
          <span className="aside-share__item--title">Twitter</span>
          <span className="aside-share__item--icon">
            <ArrowIcon />
          </span>
        </TwitterShareButton>
      </li>
      <li className="aside-share__item">
        <TelegramShareButton url={link}>
          <span className="aside-share__item--title">Telegram</span>
          <span className="aside-share__item--icon">
            <ArrowIcon />
          </span>
        </TelegramShareButton>
      </li>
      <li className="aside-share__item">
        <ViberShareButton url={link}>
          <span className="aside-share__item--title">Viber</span>
          <span className="aside-share__item--icon">
            <ArrowIcon />
          </span>
        </ViberShareButton>
      </li>
      <li className="aside-share__item">
        <WhatsappShareButton url={link}>
          <span className="aside-share__item--title">Whatsapp</span>
          <span className="aside-share__item--icon">
            <ArrowIcon />
          </span>
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default AsideShare;
