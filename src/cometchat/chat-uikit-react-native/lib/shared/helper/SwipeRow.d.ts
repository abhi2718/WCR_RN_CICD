export default SwipeRow;
/**
 * Row that is generally used in a SwipeListView.
 * If you are rendering a SwipeRow explicitly you must pass the SwipeRow exactly two children.
 * The first will be rendered behind the second.
 * e.g.
  <SwipeRow>
      <View style={hiddenRowStyle} />
      <View style={visibleRowStyle} />
  </SwipeRow>
 */
declare class SwipeRow extends React.Component<any, any, any> {
    static getDerivedStateFromProps(nextProps: any, prevState: any): any;
    constructor(props: any);
    isOpen: boolean;
    leftActionActivated: boolean;
    rightActionActivated: boolean;
    previousTrackedTranslateX: number;
    currentTranslateX: number;
    previousTrackedDirection: any;
    horizontalSwipeGestureBegan: boolean;
    swipeInitialX: number;
    parentScrollEnabled: boolean;
    ranPreview: boolean;
    _ensureScrollEnabledTimer: NodeJS.Timeout;
    isForceClosing: boolean;
    state: {
        leftActionActivated: boolean;
        rightActionActivated: boolean;
        leftActionState: any;
        rightActionState: any;
        previewRepeatInterval: any;
        timeBetweenPreviewRepeats: any;
        dimensionsSet: boolean;
        hiddenHeight: string | number;
        hiddenWidth: string | number;
    };
    _translateX: Animated.Value;
    _panResponder: import("react-native").PanResponderInstance;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    getPreviewAnimation(toValue: any, delay: any): Animated.CompositeAnimation;
    onContentLayout(e: any): void;
    doFullAnimation(): void;
    onRowPress(): void;
    handleOnMoveShouldSetPanResponder(e: any, gs: any): boolean;
    handlePanResponderMove(e: any, gestureState: any): void;
    ensureScrollEnabled: () => void;
    handlePanResponderRelease(e: any, gestureState: any): void;
    handlePanResponderEnd(e: any, gestureState: any): void;
    handleRightSwipe(projectedExtraPixels: any): void;
    handleLeftSwipe(projectedExtraPixels: any): void;
    determineAction(actionSide: any): () => void;
    closeRow(): void;
    /**
     * Force close the row toward the end of the given direction.
     * @param  {String} direction The direction to force close.
     */
    forceCloseRow(direction: string): void;
    closeRowWithoutAnimation(): void;
    manuallySwipeRow(toValue: any, onAnimationEnd: any): void;
    combinedOnPress: (...args: any[]) => void;
    renderVisibleContent(): React.JSX.Element;
    renderRowContent(): React.JSX.Element;
    render(): React.JSX.Element;
}
declare namespace SwipeRow {
    namespace propTypes {
        let setScrollEnabled: PropTypes.Requireable<(...args: any[]) => any>;
        let swipeGestureBegan: PropTypes.Requireable<(...args: any[]) => any>;
        let swipeGestureEnded: PropTypes.Requireable<(...args: any[]) => any>;
        let onRowOpen: PropTypes.Requireable<(...args: any[]) => any>;
        let onRowDidOpen: PropTypes.Requireable<(...args: any[]) => any>;
        let leftOpenValue: PropTypes.Requireable<number>;
        let rightOpenValue: PropTypes.Requireable<number>;
        let leftActivationValue: PropTypes.Requireable<number>;
        let rightActivationValue: PropTypes.Requireable<number>;
        let leftActionValue: PropTypes.Requireable<number>;
        let rightActionValue: PropTypes.Requireable<number>;
        let initialLeftActionState: PropTypes.Requireable<boolean>;
        let initialRightActionState: PropTypes.Requireable<boolean>;
        let stopLeftSwipe: PropTypes.Requireable<number>;
        let stopRightSwipe: PropTypes.Requireable<number>;
        let friction: PropTypes.Requireable<number>;
        let tension: PropTypes.Requireable<number>;
        let restSpeedThreshold: PropTypes.Requireable<number>;
        let restDisplacementThreshold: PropTypes.Requireable<number>;
        let closeOnRowPress: PropTypes.Requireable<boolean>;
        let disableLeftSwipe: PropTypes.Requireable<boolean>;
        let disableRightSwipe: PropTypes.Requireable<boolean>;
        let recalculateHiddenLayout: PropTypes.Requireable<boolean>;
        let disableHiddenLayoutCalculation: PropTypes.Requireable<boolean>;
        let onRowClose: PropTypes.Requireable<(...args: any[]) => any>;
        let onRowDidClose: PropTypes.Requireable<(...args: any[]) => any>;
        let onLeftAction: PropTypes.Requireable<(...args: any[]) => any>;
        let onRightAction: PropTypes.Requireable<(...args: any[]) => any>;
        let onLeftActionStatusChange: PropTypes.Requireable<(...args: any[]) => any>;
        let onRightActionStatusChange: PropTypes.Requireable<(...args: any[]) => any>;
        let style: PropTypes.Requireable<object>;
        let preview: PropTypes.Requireable<boolean>;
        let previewDuration: PropTypes.Requireable<number>;
        let previewRepeat: PropTypes.Requireable<boolean>;
        let previewRepeatDelay: PropTypes.Requireable<number>;
        let previewOpenValue: PropTypes.Requireable<number>;
        let directionalDistanceChangeThreshold: PropTypes.Requireable<number>;
        let swipeToOpenPercent: PropTypes.Requireable<number>;
        let swipeToOpenVelocityContribution: PropTypes.Requireable<number>;
        let swipeToClosePercent: PropTypes.Requireable<number>;
        let shouldItemUpdate: PropTypes.Requireable<(...args: any[]) => any>;
        let onSwipeValueChange: PropTypes.Requireable<(...args: any[]) => any>;
        let forceCloseToLeftThreshold: PropTypes.Requireable<number>;
        let forceCloseToRightThreshold: PropTypes.Requireable<number>;
        let onForceCloseToLeft: PropTypes.Requireable<(...args: any[]) => any>;
        let onForceCloseToRight: PropTypes.Requireable<(...args: any[]) => any>;
        let onForceCloseToLeftEnd: PropTypes.Requireable<(...args: any[]) => any>;
        let onForceCloseToRightEnd: PropTypes.Requireable<(...args: any[]) => any>;
        let useNativeDriver: PropTypes.Requireable<boolean>;
        let children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        let swipeKey: PropTypes.Requireable<string>;
        let onPreviewEnd: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        let leftOpenValue_1: number;
        export { leftOpenValue_1 as leftOpenValue };
        let rightOpenValue_1: number;
        export { rightOpenValue_1 as rightOpenValue };
        let closeOnRowPress_1: boolean;
        export { closeOnRowPress_1 as closeOnRowPress };
        let disableLeftSwipe_1: boolean;
        export { disableLeftSwipe_1 as disableLeftSwipe };
        let disableRightSwipe_1: boolean;
        export { disableRightSwipe_1 as disableRightSwipe };
        let recalculateHiddenLayout_1: boolean;
        export { recalculateHiddenLayout_1 as recalculateHiddenLayout };
        let disableHiddenLayoutCalculation_1: boolean;
        export { disableHiddenLayoutCalculation_1 as disableHiddenLayoutCalculation };
        let preview_1: boolean;
        export { preview_1 as preview };
        let previewDuration_1: number;
        export { previewDuration_1 as previewDuration };
        export { DEFAULT_PREVIEW_OPEN_DELAY as previewOpenDelay };
        let directionalDistanceChangeThreshold_1: number;
        export { directionalDistanceChangeThreshold_1 as directionalDistanceChangeThreshold };
        let swipeToOpenPercent_1: number;
        export { swipeToOpenPercent_1 as swipeToOpenPercent };
        let swipeToOpenVelocityContribution_1: number;
        export { swipeToOpenVelocityContribution_1 as swipeToOpenVelocityContribution };
        let swipeToClosePercent_1: number;
        export { swipeToClosePercent_1 as swipeToClosePercent };
        export let item: {};
        let useNativeDriver_1: boolean;
        export { useNativeDriver_1 as useNativeDriver };
        let previewRepeat_1: boolean;
        export { previewRepeat_1 as previewRepeat };
        let previewRepeatDelay_1: number;
        export { previewRepeatDelay_1 as previewRepeatDelay };
    }
}
import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
declare const DEFAULT_PREVIEW_OPEN_DELAY: 700;
