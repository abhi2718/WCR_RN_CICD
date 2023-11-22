import React, { useState } from 'react';
import { ScreenParams } from '../../../../../types/services.types/firebase.service';

export const useAddProfilePicViewModal = (props: ScreenParams) => {
  const [isPicUploadInfoModalVisible, setPicUploadInfoModalVisible] =
    useState(false);

  const closeModal = () => {
    setPicUploadInfoModalVisible(false);
  };
  const openModal = () => {
    setPicUploadInfoModalVisible(true);
  };
  return { closeModal, openModal, isPicUploadInfoModalVisible };
};
