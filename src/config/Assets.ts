import {Assets} from 'react-native-ui-lib';



// or as a nested group to create your own hierarchy
Assets.loadAssetsGroup('onboarding', {
  cloud3zap: require('../../assets/Cloud3zap.png'),
  moonCloud: require('../../assets/MoonCloud.png'),
  rocket: require('../../assets/Rocket.png')
});
Assets.loadAssetsGroup('HomeImage', {
  noMessages: require('noMessages.png'),
  noContacts: require('noContacts.png'),
});
