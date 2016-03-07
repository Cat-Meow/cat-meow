import React from 'react';
import Salt from '../../index.js';
import BaseInfo from '../api/base-info.js';

export default class Page extends Salt.PageLayout {
    system = {
        name: 'Salt',
        navigation: BaseInfo.menuData
    }

	filterData(data, url) {
		let length = data.length;
		let list = [];

		for (let i = 0; i < length; i ++) {
			if (data[i].href === url) {
				list = data;
			} else if (data[i].children) {
				list = this.filterData(data[i].children, url);
			}
			if (list.length > 0) {
				break;
			}
		}

		return list;
	}

    renderMainContent() {}

    renderMain() {
		let menuData = this.filterData(BaseInfo.menuData, MYM.url);

        return (
            <div className="container">
                <div className="col-md-3">
                    <Salt.Tree data={menuData} />
                </div>
                {this.renderMainContent()}
            </div>
        );
    }
}
