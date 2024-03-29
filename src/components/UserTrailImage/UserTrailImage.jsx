import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import styles from './UserTrailImage.module.scss';

import { fetchRelatedTrails } from '../../store/effects';

const UserTrailImage = ({
  image,
  activeImageId,
  toggleSelectImage
}) => {
  const isActive = image._id === activeImageId;
  const imageClasses = classnames(styles.component, {
    [styles.componentActive]: activeImageId === image._id
  });

  return (
    <button type="button"
            onClick={() => toggleSelectImage(isActive ? null : image._id)}
            className={imageClasses}
            style={{
              backgroundImage: `url(${image.thumbSrc})`
            }}>
      <img src={image.thumbSrc} 
           alt={image.thumbSrc} 
           className={styles.image}/>
    </button>
  );
}

export default connect(
  state => ({
    activeImageId: state.ui.activeImageId
  }),
  dispatch => ({
    toggleSelectImage: (id) => dispatch(fetchRelatedTrails(id))
  })
)(UserTrailImage);