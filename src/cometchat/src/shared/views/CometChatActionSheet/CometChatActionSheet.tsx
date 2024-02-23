import React, { useContext } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { CometChatContext } from '../../CometChatContext';
import { localize } from '../../resources/CometChatLocalize';
// import grid from './resources/grid.png';
// import list from './resources/list.png';
import { ActionSheetStyles } from './ActionSheetStyle';
import { Style } from './style';
import { Hooks } from './hooks';
import { ICONS } from './resources';
import { CometChatContextType } from '../../base/Types';
import { ActionItemInterface } from './ActionItem';
import { fonts } from '../../../../../infrastructure/theme/fonts';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../navigation';
import { colors } from '../../../../../infrastructure/theme/colors';
import { Spacer } from '../../../../../components/tools';
const layoutType = Object.freeze({
  list: 'list',
  grid: 'grid',
});

const OptionListView = ({
  key,
  title,
  iconUrl,
  iconTint,
  titleStyle,
  iconBackgroundColor,
  listItemIconBorderRadius,
  backgroundColor,
  cornerRadius,
  onPress,
  style,
  theme,
}) => {
  return (
    <TouchableOpacity
      key={key}
      style={[
        Style.listItemContainer,
        {
          paddingHorizontal: 10,
          borderRadius: cornerRadius || 0,
          backgroundColor: backgroundColor || theme.palette.getAccent50(),
          justifyContent: !iconUrl ? 'center' : undefined,
        },
      ]}
      onPress={onPress}
    >
      {Boolean(iconUrl) && (
        <Image
          source={iconUrl}
          style={[
            Style.listItemImageStyle,
            {
              tintColor:
                iconTint || style?.listItemIconTint || 'rgba(20,20,20,0.69)',
              backgroundColor:
                iconBackgroundColor ||
                style?.listItemIconBackground ||
                'transparent',
              borderRadius:
                listItemIconBorderRadius ||
                style?.listItemIconBorderRadius ||
                0,
            },
          ]}
        />
      )}
      <Text
        style={[
          {
            ...(style?.listItemTitleFont || {
              fontSize: 17,
              fontWeight: '400',
              fontFamily: fonts.body,
            }),
            color: style?.listItemTitleColor || 'rgb(20,20,20)',
            fontFamily: fonts.body,
          },
          titleStyle,
          Style.listTitleStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const OptionGridView = ({
  title,
  iconUrl,
  iconTint,
  titleStyle,
  iconBackgroundColor,
  listItemIconBorderRadius,
  backgroundColor,
  cornerRadius,
  onPress,
  style,
  theme,
}) => {
  return (
    <View
      style={[
        Style.gridItemContainer,
        {
          backgroundColor: backgroundColor || theme.palette.getAccent50(),
          borderRadius: cornerRadius || 8,
        },
      ]}
    >
      <TouchableOpacity style={Style.gridBtnStyle} onPress={onPress}>
        <Image
          source={iconUrl}
          style={[
            Style.listItemImageStyle,
            {
              tintColor:
                iconTint || style?.listItemIconTint || 'rgba(20,20,20,0.69)',
              backgroundColor:
                iconBackgroundColor ||
                style?.listItemIconBackground ||
                'transparent',
              borderRadius:
                listItemIconBorderRadius ||
                style?.listItemIconBorderRadius ||
                0,
            },
          ]}
        />
        <Text
          style={[
            {
              ...(style?.listItemTitleFont || {
                fontSize: 17,
                fontWeight: '400',
                fontFamily: fonts.body,
              }),
              color: style?.listItemTitleColor || 'rgb(20,20,20)',
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

interface CometChatActionSheetInterface {
  title: string;
  layoutModeIconURL: any;
  layoutMode: 'list' | 'grid';
  hideLayoutMode: boolean;
  actions: ActionItemInterface[];
  style: ActionSheetStyles;
  hideHeader?: boolean;
  showReportIcon?: boolean;
  isMe?: boolean;
}
export const CometChatActionSheet = (props: CometChatActionSheetInterface) => {
  const { theme } = useContext<CometChatContextType>(CometChatContext);
  const style = {
    ...new ActionSheetStyles({
      listItemIconTint: theme.palette.getAccent700(),
      listItemTitleFont: theme.typography.subtitle1,
      listItemTitleColor: theme.palette.getAccent(),
      titleColor: theme.palette.getAccent(),
      titleFont: theme.typography.name,
      backgroundColor: props.style?.backgroundColor,
      paddingHorizontal: props.style?.paddingHorizontal,
    }),
    ...props.style,
  };
  const [listMode, setListMode] = React.useState(true);
  const [actionList, setActionList] = React.useState(props.actions);
  const navigation = useNavigation();
  Hooks(props, setActionList);

  const _render = ({ item }) => {
    return (
      <OptionListView
        key={item.id}
        {...item}
        iconUrl={item.icon || item.iconUrl}
        theme={theme}
        backgroundColor={style.listItemBackground}
        style={style}
      />
    );
  };
  const _renderGrid = ({ item }) => (
    <OptionGridView
      key={item.id}
      {...item}
      iconUrl={item.icon || item.iconUrl}
      theme={theme}
      style={style}
    />
  );

  const getList = () => {
    if (listMode) {
      return (
        <View style={Style.listContainer}>
          {props?.showReportIcon && (
            <TouchableOpacity
              onPress={() => {
                const copyMessageAction = actionList.find(
                  (item) => item.id === 'copyMessage',
                );
                copyMessageAction?.onPress();
                navigation.navigate(ROUTES.Report, {
                  userId:'cometChatUser'
                });
              }}
            >
              <View
                style={{
                  backgroundColor: '#f8f8f8',
                  height: 50,
                  alignItems:"center",
                  paddingLeft: 16,
                  borderBottomColor: 'rgba(0,0,0,0.1)',
                  borderBottomWidth: 1,
                  flexDirection:"row"
                }}
              >
                <Image style={{
                  width: 24,
                  height: 24
                }}
                  source={require('../../../../../assets/Report_icon/report.png')}
                />
                <Spacer position='left' size={10}>
                <Text style={{
                  fontFamily: fonts.body,
                  fontSize: 16,
                  fontWeight: "500",
                  color:"rgba(0,0,0,0.8)"
                }}>Report</Text>
                </Spacer>
              </View>
            </TouchableOpacity>
          )}
          <FlatList
            key={'list'}
            keyExtractor={(item) => item.id}
            data={actionList}
            numColumns={1}
            renderItem={_render}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: 1,
                  backgroundColor:
                    props.style?.actionSheetSeparatorTint ||
                    props.style?.optionsSeparatorTint ||
                    theme.palette.getAccent200(),
                }}
              />
            )}
          />
        </View>
      );
    } else {
      return (
        <FlatList
          key={'grid'}
          keyExtractor={(item) => item.id}
          data={actionList}
          numColumns={2}
          renderItem={_renderGrid}
        />
      );
    }
  };

  const getLayoutModeIcon = () => {
    if (props.hideLayoutMode) return null;
    let img = props.layoutModeIconURL;
    if (img == undefined) {
      img = listMode ? ICONS.GRID : ICONS.LIST;
    }
    return (
      <TouchableOpacity onPress={() => setListMode(!listMode)}>
        <Image
          style={[
            Style.layoutBtnStyle,
            {
              tintColor: style?.layoutModeIconTint || 'rgb(51, 153, 255)',
            },
          ]}
          source={img}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        {
          height: style?.height,
          width: style?.width,
          backgroundColor: style?.backgroundColor || 'transparent',
          borderRadius: style?.borderRadius,
          paddingHorizontal: style?.paddingHorizontal ?? 10,
        },
        style?.border,
      ]}
    >
      {!props.hideHeader && (
        <View style={Style.headerStyle}>
          <Text
            style={[
              Style.titleStyle,
              {
                ...(style?.titleFont || {
                  fontSize: 17,
                  fontWeight: '500',
                }),
                color: style?.titleColor || 'rgba(20, 20, 20,0.9)',
              },
            ]}
          >
            {props.title}
          </Text>
          {getLayoutModeIcon()}
        </View>
      )}
      {getList()}
    </View>
  );
};

CometChatActionSheet.defaultProps = {
  title: localize('ADD_TO_CHAT'),
  layoutModeIconURL: undefined,
  layoutMode: layoutType['list'],
  hideLayoutMode: false,
  actions: [],
  style: null,
};
