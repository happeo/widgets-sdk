# Happeo widget SDK

Start building your own widget in Happeo!

The widget SDK allows you to tap directly to Happeo apis and content in order to create fully customisable widgets.

## How to use

Install the widget SDK to your Happeo Widget project. See examples from [Custom Widget Templates](https://github.com/happeo/custom-widget-templates).

```



npm install @happeo/widget-sdk



```

In your app, import the SDK and run `init(widgetId)` in order to start using it:

```



import widgetSDK from "@happeo/widget-sdk";

const { happeo, uikit } = widgetSDK



const myAwesomeWidget = ({widgetId}) => {

const [user, setUser] = useState();



useEffect(() => {

const init = async () => {

await happeo.init(widgetId);

setUser(await happeo.user.getCurrentUser())

}

init();

},[widgetId])



return (

<uikit.typography.BodyUI>Hello world, {user && user.name.fullName}!</uikit.typography.BodyUI>

)

};



```

## SDK requests - happeo

**happeo.init("my-widget-id");**

Initialises the SDK. Requires string widget id as the parameter. Returns Promise.

**happeo.user.getCurrentUser();**

Returns the full current user who is viewing this widget. Returns Promise.

**happeo.user.oAuthBegin();**

Starts oAuth flow, which can be specified to the widget from the widget setup. Returns Promise.

**happeo.widget.getContext();**

Gets the context of the widget. Who is viewing the widget and where is this widget being displayed. Returns Promise.

**happeo.widget.getJWT();**

Gets the JWT for the widget. JWT includes signed data from the user & organisation. Returns Promise.

**happeo.widget.getContent();**

Gets the content for the widget. Depending on where widget is shown, different content will be delivered. Returns Promise.

**happeo.widget.setContent();**

Does not perform remote calls itself, depending where widget is displayed, this may include an automatic remote call. Returns Promise.

## SDK uikit

The Happeo UI Kit can be accessed through the `sdk.uikit` object. The reason why we exposed components through this object, is so that we can give you the possibility to use some non-public-uikit components.

### Currenlty we support the following

`<Editor />` = Rich text editor

Note that the editor is a very complex component that requires some knowledge on how it works. But here are the most important things to know:

- You should attach a ref to the editor, for example `ref={editorRef}`.
- When you want the content of the editor, call `editorRef.current?.getContent();`.
- If you want to clear the editor, call `editorRef.current?.clearContent();`.
- Focusing on editor can be done with `editorRef.current.setFocus()`. Note that the init takes a couple of milliseconds.
- Full list of methods can be found at [Froala editor's website](https://froala.com/wysiwyg-editor/docs/methods/).

**Props:**

- content <string> content
- type <string> We support different out-of-the-box editor configurations. We recommend using "full" for full experience and "comment" for inline experience. See prop-types.
- showMentionPicker <bool>
- showEmojiPicker <bool>
- showHashtagPicker <bool>
- channelId <string> if provided, the mentioning will target the given channel
- opts <object> Additional froala editor configurations
- hashtagAddedCallback <function>
- onFocused <function>
- onBlurred <function>
- onContentChanged <function>
- onVideoInserted <function>
- onCmdEnterShortcutTriggered <function>
- maxNumberOfHashtags <number>
- onImageUploaded <function>
- onImageInserted <function>
- onImageRemoved <function>

To access the Happeo UI Kit components, you can do that by doing `sdk.uikit[componentName]`. An example could be `<sdk.uikitEditor>`.

Full list of available components can be found here:
https://uikit.happeo.com/
