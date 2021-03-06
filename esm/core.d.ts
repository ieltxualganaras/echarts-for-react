import { PureComponent } from 'react';
import { EChartsReactProps } from './types';
/**
 * core component for echarts binding
 */
export default class EChartsReactCore extends PureComponent<EChartsReactProps> {
  /**
   * echarts render container
   */
  ele: HTMLElement;
  /**
   * echarts library entry
   */
  protected echarts: any;
  constructor(props: EChartsReactProps);
  componentDidMount(): void;
  componentDidUpdate(prevProps: EChartsReactProps): void;
  componentWillUnmount(): void;
  /**
   * return the echart object
   * 1. if exist, return the existed instance
   * 2. or new one instance
   */
  getEchartsInstance(): any;
  /**
   * dispose echarts and clear size-sensor
   */
  private dispose;
  /**
   * render a new echarts instance
   */
  private renderNewEcharts;
  private bindEvents;
  /**
   * render the echarts
   */
  private updateEChartsOption;
  render(): JSX.Element;
}
