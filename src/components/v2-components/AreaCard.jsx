import React from 'react';
import classNames from 'classnames';
import sty from './AreaCard.module.css';

const AreaCard = ({ data, types }) => {
  const isContent = types === 'content';
  const isFullContent = types === 'fullContent';

  return (
    <div
      className={classNames(
        sty.root,
        {
          [sty.roottypes_content]: isContent,
          [sty.roottypes_fullContent]: isFullContent
        }
      )}
    >
      <div className={classNames(sty.freeBox__dBSoq)}>
        <div className={classNames(sty.freeBox__ynKt0)}>
          <img
            alt=""
            className={classNames(sty.img)}
            width={32}
            height={32}
            src="/plasmic/image_lab_2024/images/iconSvg14.svg"
          />
        </div>
        <div
          className={classNames(
            sty.freeBox___3ZwzO,
            {
              [sty.freeBoxtypes_content___3ZwzOBqb1V]: isContent,
              [sty.freeBoxtypes_fullContent___3ZwzO9R0H5]: isFullContent
            }
          )}
        >
          <div
            className={classNames(
              sty.text__qxbqb,
              {
                [sty.texttypes_content__qxbqbBqb1V]: isContent
              }
            )}
          >
            {data?.name || ''}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          sty.freeBox__eDd3T,
          {
            [sty.freeBoxtypes_content__eDd3TBqb1V]: isContent,
            [sty.freeBoxtypes_fullContent__eDd3T9R0H5]: isFullContent
          }
        )}
      >
        <div
          className={classNames(
            sty.freeBox__eSwSk,
            {
              [sty.freeBoxtypes_content__eSwSkBqb1V]: isContent,
              [sty.freeBoxtypes_fullContent__eSwSk9R0H5]: isFullContent
            }
          )}
          style={{ display: data?.range ? 'flex' : 'none' }}
        >
          <div
            className={classNames(
              sty.text___9A631,
              {
                [sty.texttypes_content___9A631Bqb1V]: isContent,
                [sty.texttypes_fullContent___9A6319R0H5]: isFullContent
              }
            )}
          >
            {data?.range || ''}
          </div>
          <div
            className={classNames(
              sty.text__iNCa,
              {
                [sty.texttypes_content__iNCaBqb1V]: isContent,
                [sty.texttypes_fullContent__iNCa9R0H5]: isFullContent
              }
            )}
          >
            {' / ' + (data?.units || '')}
          </div>
        </div>
        <div
          className={classNames(
            sty.text__hJj4H,
            {
              [sty.texttypes_content__hJj4HBqb1V]: isContent,
              [sty.texttypes_fullContent__hJj4H9R0H5]: isFullContent
            }
          )}
        >
          {data?.content || ''}
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
