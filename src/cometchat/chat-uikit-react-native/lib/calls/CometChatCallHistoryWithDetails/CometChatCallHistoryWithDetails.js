import React, { useState, useRef, useContext } from 'react';
import { View } from 'react-native';
import { Style } from './style';
import { CometChatContext } from '../../shared';
const CometChatCallHistoryWithDetails = (props) => {
    const { call, callDetailsConfiguration, callHistoryConfiguration, onError } = props;
    const [showDetails, setShowDetails] = useState(call ? true : false);
    const selectedCall = useRef(call);
    const { theme } = useContext(CometChatContext);
    return (<View>
            {/* <CometChatCallHistory
            onInfoIconPress={({ call }) => {
                selectedCall.current = call as CometChat.Call;
                setShowDetails(true)
            }}
            onError={onError}
            {...callHistoryConfiguration}
        /> */}
            {showDetails &&
            <View style={[Style.stackScreen, { backgroundColor: theme.palette.getBackgroundColor() }]}>
                    {/* <CometChatCallDetails
                    onError={onError}
                    call={selectedCall.current}
                    onBack={() => setShowDetails(false)}
                    {...callDetailsConfiguration}
                /> */}
                </View>}
        </View>);
};
//# sourceMappingURL=CometChatCallHistoryWithDetails.js.map