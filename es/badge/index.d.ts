import * as React from 'react';
import * as PropTypes from 'prop-types';
export { ScrollNumberProps } from './ScrollNumber';
export interface BadgeProps {
    /** Number to show in badge */
    count?: number | string | null;
    showZero?: boolean;
    /** Max count to show */
    overflowCount?: number;
    /** whether to show red dot without number */
    dot?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    scrollNumberPrefixCls?: string;
    className?: string;
    status?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    text?: string;
    offset?: [number | string, number | string];
    title?: string;
}
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        prefixCls: string;
        scrollNumberPrefixCls: string;
        count: null;
        showZero: boolean;
        dot: boolean;
        overflowCount: number;
    };
    static propTypes: {
        count: PropTypes.Requireable<string | number>;
        showZero: PropTypes.Requireable<boolean>;
        dot: PropTypes.Requireable<boolean>;
        overflowCount: PropTypes.Requireable<number>;
    };
    render(): JSX.Element;
}
