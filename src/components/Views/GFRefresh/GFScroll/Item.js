/*
 * @Author: aran.hu 
 * @Date: 2017-06-29 14:23:37 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2017-06-30 10:55:36
 */
import React, {Component} from 'react';
import _ from 'lodash';
export default class Item extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.viewType === 'ListView') {
            // listview 更新逻辑
            return !_.isEqual(this.props.item, nextProps.item)
        }
        return nextProps.toRenderItem
    }

    render() {
        const {renderItem, item, bingo} = this.props
        return item ? renderItem(item) : renderItem()
    }
}
