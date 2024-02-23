import React from 'react';
import { KeyboardAvoidingView, Modal, Text, View } from 'react-native';
import { WebsiteModalProps } from '../../types/components/modal.type';
import { HeaderBar } from '../header';
import { FlatInput } from '../inputBox';
import { PrimaryButton } from '../button';
import { isAndroid } from '../tools';
import { verificationStyle } from '../../screens/verification/stepOne/verificationSteps';
import { ErrorText } from '../../screens/auth/signin/signInStyle';
import style from '../../cometchat/src/shared/views/CometChatReceipt/style';

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
    validateUserWebsiteUrl,
    skip,
    error,
    validateUserWebsiteUrlHealthCare,
    isValidWebsiteUrlHealthCare,
  } = props;

  return (
    <Modal visible={isVisible}>
      <View style={verificationStyle.paddingH}>
        <HeaderBar goBack={onClose} skip={skip} />
      </View>

      <View
        style={[verificationStyle.paddingH, verificationStyle.wrapperContainer]}
      >
        {verificationOption === 'License Number' && (
          <View>
            <Text style={verificationStyle.headingText}>Step I</Text>
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
                onChangeText={(text: string) => validateUserWebsiteUrl(text)}
              />
              {!isValidWebsiteUrl && optionData?.licenceWebsite?.length ? (
                <ErrorText>Please enter a valid Website.</ErrorText>
              ) : (
                <View />
              )}
              {error ? (
                <ErrorText>
                  Enter your website or click 'Skip' to proceed without it..
                </ErrorText>
              ) : (
                <View />
              )}
            </KeyboardAvoidingView>
            <Text style={verificationStyle.footerText}>
              We may request additional proof of degree if needed, depending on
              the type of degree.
            </Text>
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
                  validateUserWebsiteUrlHealthCare(text)
                }
              />
              {!isValidWebsiteUrlHealthCare &&
              optionData?.healthCareProfessionalEmail?.length ? (
                <ErrorText>Please enter a valid Website.</ErrorText>
              ) : (
                <View />
              )}
              {error ? (
                <ErrorText>
                  Enter your website or click 'Skip' to proceed without it...
                </ErrorText>
              ) : (
                <View />
              )}
            </KeyboardAvoidingView>
          </View>
        )}
        {verificationOption === 'Student' && (
          <View>
            <Text style={verificationStyle.headingText}>Step I</Text>
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
                onChangeText={(text: string) => validateEmail(text)}
                value={optionData.studentEmail}
              />
              {!isValidEmail && optionData?.studentEmail?.length ? (
                <ErrorText>Please enter a valid email address.</ErrorText>
              ) : (
                <View />
              )}
              {error ? (
                <ErrorText>
                  Enter your email ID or click 'Skip' to proceed without it..
                </ErrorText>
              ) : (
                <View />
              )}
            </KeyboardAvoidingView>
          </View>
        )}

        <View style={verificationStyle.footerButton}>
          <KeyboardAvoidingView
            enabled
            behavior={isAndroid ? 'height' : 'padding'}
          >
            <PrimaryButton
              onPress={navigateToVerificationStepTwo}
              title="Next"
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};
