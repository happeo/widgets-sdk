import { getCustomWidgetGlobal } from '../globals';
import { WidgetContent, WidgetContext } from '../interfaces';

/**
 * Gets the context of the widget.Who is viewing the widget and where is this widget being displayed
 *
 * @returns Context of the widget.
 */
export const getWidgetContext = async (): Promise<WidgetContext> => {
  try {
    const api = await getCustomWidgetGlobal();
    return api.widget.getContext();
  } catch (error) {
    throw error;
  }
};

/**
 * Gets the JWT for the widget. JWT includes signed data from the user & organisation
 *
 * @returns string JWT
 */
export const getJWT = async (): Promise<string> => {
  try {
    const api = await getCustomWidgetGlobal();
    return api.widget.getJWT();
  } catch (error) {
    throw error;
  }
};

/**
 * Gets the content for the widget. Depending on where widget is shown, different content will be delivered
 *
 * @returns Content for the widget. String content and object properties
 */
export const getWidgetContent = async (): Promise<WidgetContent> => {
  try {
    const api = await getCustomWidgetGlobal();
    return api.widget.getContent();
  } catch (error) {
    throw error;
  }
};

/**
 * Does not perform remote calls itself, depending where widget is displayed, this may include
 * an automatic remote call.
 *
 * @param content Stringified content to save
 * @param properties Object properties to save
 * @returns void
 */
export const saveWidgetContent = async (
  content: string,
  properties: any
): Promise<any> => {
  try {
    const api = await getCustomWidgetGlobal();
    return api.widget.saveContent(content, properties);
  } catch (error) {
    throw error;
  }
};
