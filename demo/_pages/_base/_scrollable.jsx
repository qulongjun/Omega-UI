/**
 *
 * @Demo: Scrollabe
 * @User: Longjun.Qu
 * @Date: 2018-06-25
 * @Time: 22:17
 *
 */


import React, {Component, Fragment} from 'react';
import {
    Content,
    Div,
    Portlet,
    Paragraph
} from 'omega';

export default class Scrollable extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Fragment>
                <Content>
                    <div className="row">
                        <div className="col-xl-6">
                            <Portlet {...{
                                header: '基础示例',
                                scroll: {
                                    show: true,
                                    fixHeight: 200
                                }
                            }} >
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                            </Portlet>
                            <Portlet {...{
                                header: '显示滚动条',
                                scroll: {
                                    show: true,
                                    scrollBar: true,
                                    fixHeight: 200
                                }
                            }} >
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                            </Portlet>
                        </div>
                        <div className="col-xl-6">
                            <Portlet {...{
                                header: '水平滚动条',
                                scroll: {
                                    show: true,
                                    fixHeight: 200,
                                    fixWidth: 1300,
                                    axis: 'x'
                                }
                            }} >
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                            </Portlet>
                            <Portlet {...{
                                header: '水平&垂直滚动条',
                                scroll: {
                                    show: true,
                                    fixHeight: 200,
                                    fixWidth: 1300,
                                    axis: 'yx'
                                }
                            }} >
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                                <Paragraph>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book. It has survived not only five centuries, but also
                                    the leap into electronic typesetting, remaining essentially unchanged. It
                                    was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </Paragraph>
                            </Portlet>
                        </div>
                    </div>
                </Content>
            </Fragment>
        );
    }
}