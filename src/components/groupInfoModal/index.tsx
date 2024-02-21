import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Row, Spacer } from '../tools';
import { PrimaryButton } from '../button';
import { ProfilePicInfoModalProps } from '../../types/components/modal.type';
import { modalStyle } from './groupInStyle';
import { colors } from '../../infrastructure/theme/colors';
export type ScrollViewRef = ScrollView & {
  flashScrollIndicators: () => void;
};
export const GroupInfoModal = (props: ProfilePicInfoModalProps) => {
  const { isVisible, onClose, joinGroup } = props;
  const scrollViewRef = useRef<ScrollViewRef | null>(null);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    if (isVisible && scrollViewRef.current) {
      setTimeout(function () {
        scrollViewRef.current?.flashScrollIndicators();
      }, 10);
    }
    return () => {
      setIsEndReached(false);
    }
  }, [isVisible]);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { layoutMeasurement, contentOffset, contentSize } =
        event.nativeEvent;
      const paddingToBottom = 20;
      setIsEndReached(oldState => {
        if (!oldState) {
          return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        }
        return true;
      });
    },
    [],
  );
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={modalStyle.centeredView}>
        <View style={modalStyle.modalView}>
          <Row alignItems="center" justifyContent="space-between">
            <Image
              style={modalStyle.logo}
              resizeMode="contain"
              source={require('../../assets/images/logo.png')}
            />
            <Pressable onPress={onClose}>
              <Image
                style={modalStyle.closeIcon}
                resizeMode="contain"
                source={require('../../assets/images/icons/crossIcon.png')}
              />
            </Pressable>
          </Row>
          <Spacer position="top" size={10} />
          <View>
            <Text style={modalStyle.header}>Community Group Rules</Text>
            <Text style={modalStyle.subHeader}>Last updated on 12/06/2023</Text>
            <Spacer position="top" size={15} />
          </View>
          <ScrollView
            style={modalStyle.flex}
            scrollIndicatorInsets={{ right: 10 }}
            persistentScrollbar={true}
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            <Text style={modalStyle.header}>
              To ensure a respectful and enjoyable experience for everyone,
              please review and accept before participating.
            </Text>
            <Spacer position="top" size={10} />
            <View style={modalStyle.flex}>
              <Text style={modalStyle.contentHeader}>
                1. Respect and inclusivity
              </Text>
              <Text style={modalStyle.contentText}>
                Be kind, courteous and inclusive, avoid any form of
                discrimination.
              </Text>
              <Text style={modalStyle.contentHeader}>2. Mutual respect</Text>
              <Text style={modalStyle.contentText}>
                Embrace diverse perspectives, foster culture of respect and
                understanding, avoid heated debates.
              </Text>

              <Text style={modalStyle.contentHeader}>3. Mindful language</Text>
              <Text style={modalStyle.contentText}>
                Use inclusive and clear language. No hate speech, bullying,
                harassment, or threats. Avoid personal attacks, insults, or
                derogatory language.
              </Text>

              <Text style={modalStyle.contentHeader}>
                4. Constructive communication
              </Text>
              <Text style={modalStyle.contentText}>
                Engage respectfully, provide helpful feedback and promote
                positive interactions.
              </Text>

              <Text style={modalStyle.contentHeader}>
                5. Privacy, confidentiality, and consent
              </Text>
              <Text style={modalStyle.contentText}>
                Respect privacy, no screenshots, obtain consent from original
                poster for content use.
              </Text>

              <Text style={modalStyle.contentHeader}>
                6. Appropriate content
              </Text>
              <Text style={modalStyle.contentText}>
                Stay on topic, avoid explicit, offensive or irrelevant content.
              </Text>

              <Text style={modalStyle.contentHeader}>7. Mindful of others</Text>
              <Text style={modalStyle.contentText}>
                Avoid spamming, solicitation, or repetitive promotion.
              </Text>

              <Text style={modalStyle.contentHeader}>8. Personal safety</Text>
              <Text style={modalStyle.contentText}>
                Prioritize personal safety, be cautious when meeting.
              </Text>

              <Text style={modalStyle.contentHeader}>
                9. Reporting and moderation
              </Text>
              <Text style={modalStyle.contentText}>
                Report any violations privately, cooperate with moderators.
              </Text>

              <Text style={modalStyle.contentHeader}>
                10. Content violating group rules will be removed
              </Text>
              <Text style={modalStyle.contentText}>
                Users may be banned based on the severity of the offense. Please
                respect moderators’ decisions as they work to maintain the
                integrity and safety of the community.
              </Text>
            </View>
          </ScrollView>
          <View style={modalStyle.footerView}>
            <Text style={modalStyle.footerText}>
              Together, we create an inclusive and supportive WCR dating app
              community. Thank you for your cooperation!
            </Text>
            <Spacer position="top" size={10} />
            <Text style={modalStyle.footerRedText}>
              White Coat Romance Team
            </Text>
            <Spacer position="top" size={20} />
            {joinGroup && <PrimaryButton
              onPress={joinGroup}
              title="Join"
              btnColor={!isEndReached?colors.ui.placeholder:colors.ui.primary}
            />}
          </View>
        </View>
      </View>
    </Modal>
  );
};
