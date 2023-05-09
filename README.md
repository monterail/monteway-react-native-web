## Monterail's React Native template

Hi Monteloper!

So you're about to kick off with this brand new project? How exciting!
To make your life easier we've prepared this template with some stuff (e.g. libraries, configs etc.) that you should find helpful during development.

#### To create fresh project based on the template just run:

```
react-native init --template https://github.com/monterail/monteway-react-native-web "ProjectName"
```
Make sure that you have new version of `react-native` installed globally or run with `npx`.

1. [Environmental variables](#environmental-variables)
2. [Sentry configuration](#sentry-configuration)
3. [Launch screen](#lanych-screen)
4. [App icon](#app-icon)
5. [New Architecture](#new-architecture)

**Here's a short list with instructions that will allow you to configure project properly. Have fun and happy coding ;)**

<hr/>

### Environmental variables

Link to official documentation:: https://github.com/luggit/react-native-config

Please create `.env` file in the main folder and use it to define all sensitive variables. The `.env` file was added to `.gitignore` file and won't be committed so it is a good idea to keep envs in 1password project's vault. All envs declared in `.env` file can be accessed in `config/env.ts` file.

<hr/>

### Sentry configuration

Link to official documentation: https://docs.sentry.io/platforms/react-native/

1. First, you need to create new project at Monterail's Sentry account. In this purpose file a ticket in [Access Request](https://monterail.atlassian.net/jira/software/projects/AR/boards/284) Jira board with short description (project name, project type - React Native). Then you can ask TKO to proceed with your request.

2. To start configuration, type following command in your project's main folder:

   `yarn sentry-wizard -i reactNative -p iOS android`

You will be redirected to Sentry's login website. After authentication get back to terminal where you'll be asked to choose project created in the first step.

3. As configuration happens automatically, after second step you should have some changes in your `android` and `iOS` folders.

4. Add `SENTRY_DSN` variable to your `.env` file. You can find it in your project's dashboard in `SDK SETUP -> Client Keys (DSN)`section.

That's it. From now on Sentry will collect default exceptions when application is launched in RELEASE mode.

<hr/>

### Launch screen

Link to official documentation: https://github.com/zoontek/react-native-bootsplash

Generation of necessary assets is automated thanks to `react-native-bootsplash` CLI.
Example: To generate assets for file named `logo.png` that lives in `src/assets/logo.png` use command:

```
yarn react-native generate-bootsplash src/assets/logo.png --logo-width=200
```

This command takes optional parameters like `--background-color` or `logo-width`(I recommend using 200 as a starter). For more details please read official documentation.

#### Troubleshooting

_Old Monetaril's logo still appears when app launches on iOS ([source](https://stackoverflow.com/questions/33002829/ios-keeping-old-launch-screen-and-app-icon-after-update)):_

1. Delete your app from the device/simulator
2. Power down the device/simulator
3. Power up device/simulator, install and launch app.

<hr  />

### App icon

#### Android

For the Android the easiest way to add app icon is with a help of Android Studio's Image Asset (https://developer.android.com/studio/write/image-asset-studio):

1.  Select `Android` view in `Project` window. Right-click res folder ans select `New` -> `Image Asset`:
    ![image_asset_studio](https://photos.app.goo.gl/bpy52Jksqdj44doz7)
2.  Choose your icon file `Path` in `Source Asset`. You can also resize it here if it doesn't fit look good:
    ![image_asset_studio2](https://photos.app.goo.gl/4oNQ3sSQh7bd1ph47)
3.  Click `Next` and then `Finish`

#### iOS

1.  To generate different app icon sized for iOS platform navigate to https://appicon.co.
2.  Upload your file, choose platforms and hit `Generate` button:
    ![app_icon_generator](https://photos.app.goo.gl/t68QLJoVFdU4EXba6)
3.  Open your project in Xcode. Select `Images.xcassets` from the left menu and then `AppIcon`. Drag icons generated in previous steps:
    ![xcode_app_icon](https://photos.app.goo.gl/YvvPjHgd4eSfVdj36)

### New Architecture
To enable new architecture:
- On iOS you can run, `RCT_NEW_ARCH_ENABLED=1 pod install` inside the ios folder.
- On Android you can set `newArchEnabled=true` inside the `android/gradle.properties` file.
