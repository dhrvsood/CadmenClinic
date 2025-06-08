import React from 'react';
import classNames from 'classnames';
import sty from './AgeGroupsCard.module.css';

import PointIcon from '@/components/plasmic/image_lab_2024/icons/PlasmicIcon__Point';

const AgeGroupsCard = ({ data }) => {
    return (
        <div className={classNames(sty.root)}>
            <div className={classNames(sty.freeBox__ayczX)}>
                <div className="__wab_flex-container ρfc">
                    <div className={classNames(sty.text__zQa1J)}>
                        {data?.title || ''}
                    </div>
                    <div className={classNames(sty.text__ab43M)}>
                        {data?.description || ''}
                    </div>
                </div>
            </div>

            <div className={classNames(sty.freeBox__rfRKo)}>
                <div className="__wab_flex-container ρfc">
                    {(data?.items || []).map((item, idx) => (
                        <div className={classNames(sty.freeBox__dNqV)} key={idx}>
                            <div className={classNames(sty.title)}>
                                <div className="__wab_flex-container ρfc">
                                    <PointIcon className={classNames(sty.svg)} role="img" />
                                    <div className={classNames(sty.text__gZbzg)}>
                                        {item.title || 'Common Treatment Areas:'}
                                    </div>
                                </div>
                            </div>
                            <div className={classNames(sty.text__r335P)}>
                                {item.description || ''}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgeGroupsCard;