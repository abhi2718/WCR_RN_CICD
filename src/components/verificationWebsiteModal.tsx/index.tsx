import React from 'react';
import { KeyboardAvoidingView, Modal, Text, View } from 'react-native';
import { WebsiteModalProps } from '../../types/components/modal.type';
import { HeaderBar } from '../header';
import { FlatInput } from '../inputBox';
import { PrimaryButton } from '../button';
import { isAndroid } from '../tools';
import { verificationStyle } from '../../screens/verification/stepOne/verificationSteps';
import { ErrorText } from '../../screens/auth/signin/signInStyle';

export const VerificationWebsiteModal = (props: WebsiteModalProps) => {
  const {
    isVisible,
    onClose,
    handleInputChange,
    verificationOption,
    navigateToVerificationStepTwo,
    optionData,
    validateEmail,
    isValidEmail,
    isValidWebsiteUrl,
    validateUserWebsiteUrl
  } = props;

  return (
    <Modal visible={isVisible}>
      <HeaderBar goBack={onClose} skip={navigateToVerificationStepTwo} />

      <View style={{ ...verificationStyle.footerDiv }}>
        {verificationOption === 'License Number' && (
          <View style={verificationStyle.white}>
            <Text>
              <Text style={verificationStyle.optionalText}>Optional: </Text>
              <Text style={verificationStyle.pointText}>
                For quicker verification, please provide a website to verify
                your degree.
              </Text>
            </Text>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <FlatInput
                label="Enter website"
                value={optionData.licenceWebsite}
                onChangeText={(text: string) =>
                  validateUserWebsiteUrl(text)
                }
              />
              {!isValidWebsiteUrl && optionData?.licenceWebsite?.length ? (
              <ErrorText>
                Please enter a valid email address.
              </ErrorText>
            ) : (
              <View />
            )}
            </KeyboardAvoidingView>
          </View>
        )}
        {verificationOption === 'HealthCare' && (
          <View style={verificationStyle.white}>
            <Text>
              <Text style={verificationStyle.optionalText}>Optional: </Text>
              <Text style={verificationStyle.pointText}>
                For quicker verification, please provide a website to verify
                your degree.
              </Text>
            </Text>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <FlatInput
                label="Enter website"
                value={optionData.healthCareProfessionalEmail}
                onChangeText={(text: string) =>
                  handleInputChange('healthCareProfessionalEmail', text)
                }
              />
            </KeyboardAvoidingView>
          </View>
        )}
        {verificationOption === 'Student' && (
          <View style={verificationStyle.white}>
            <Text>
              <Text style={verificationStyle.optionalText}>Optional: </Text>
              <Text style={verificationStyle.pointText}>
                For faster verification, please provide your student email. We
                may send an email to confirm your student status and request
                further verification if necessary.
              </Text>
            </Text>
            <KeyboardAvoidingView
              enabled
              behavior={isAndroid ? 'height' : 'padding'}
            >
              <FlatInput
                label="Enter student email"
                onChangeText={(text: string) =>
                  validateEmail(text)
                }
                value={optionData.studentEmail}
              />
              {!isValidEmail && optionData?.studentEmail?.length ? (
              <ErrorText>
                Please enter a valid email address.
              </ErrorText>
            ) : (
              <View />
            )}
            </KeyboardAvoidingView>
          </View>
        )}
        {verificationOption === 'License Number' && (
          <Text style={verificationStyle.footerText}>
            We may request additional proof of degree if needed, depending on
            the type of degree.
          </Text>
        )}
        <KeyboardAvoidingView
          enabled
          behavior={isAndroid ? 'height' : 'padding'}
        >
          <PrimaryButton onPress={navigateToVerificationStepTwo} title="Next" />
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};
