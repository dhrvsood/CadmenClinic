import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Icon10Icon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Icon10';
import sty from './TestimonialCard.module.css';

const TestimonialCard = ({
  title = "Anna’s Results",
  subtitle = 'Results after one month with Botox',
  patient = 'Anna Green',
  insta = '@anna_green',
  instaLink = '#',
  avatar,
  children,
  instagram
}) => {
  return (
    <div
      className={classNames(
        sty.root,
        {
          [sty.rootinstagram]: instagram
        }
      )}
    >
      <div className={classNames(sty.freeBox___2Yrh1)}>
        <h3 className={classNames(sty.h3)}>{title}</h3>
        <p className={classNames(sty.p__vhRq)}>{subtitle}</p>
      </div>

      {children || (
        <Image
          alt=""
          className={classNames(sty.img__c1Kfa)}
          src="/plasmic/image_lab_2024/images/image16.heic"
          width={379}
          height={379}
        />
      )}

      <div
        className={classNames(sty.freeBox__qSj92, {
          [sty.freeBoxinstagram__qSj92N5JGp]: instagram
        })}
      >
        {avatar || (
          <Image
            alt=""
            className={classNames(sty.img__gezlF)}
            src="/plasmic/image_lab_2024/images/image18.heic"
            width={44}
            height={44}
          />
        )}

        <div className={classNames(sty.freeBox__aKxe0)}>
          <div className={classNames(sty.freeBox__b5Qv)}>
            <p className={classNames(sty.p__uahni)}>{patient}</p>
            <Icon10Icon className={classNames(sty.svg)} role="img" />
          </div>
          <div className={classNames(sty.freeBox__lthVq)}>
            <p className={classNames(sty.p__yZEcw)}>Instagram: </p>
            <Link href={instaLink} className={classNames(sty.link)}>
              {insta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
