import React, {Fragment} from 'react'
import {hot} from 'react-hot-loader'
import './App.css'
import logo from './assets/logo_blue.png';
import {
    Page,
    Container,
    Wrapper,
    Content,
    Div,
    Portlet,
    Paragraph,
    Separator,
    Section,
    Link,
    Space,
    Dropdown,
    Nav,
    Button
} from 'omega';
const App = () => (
    <Fragment>
        <Page>
            <Container>
                <Wrapper>
                    <Content>
                        <Div _includeClass='row'>
                            <Div _includeClass="col-xl-12">
                                <Portlet {...{
                                header: {title: 'Get Started'},
                                _includeClass: 'text-center'
                                }}>
                                <img src={logo} width='20%'/>
                                <Separator/>
                                <Section title="恭喜您，Omega 搭建成功！" describe="在开始项目之前，以下内容可能会对您有帮助：">
                                <Link {...{
                                href: 'https://doc.react-china.org/'
                                }}>React 中文文档</Link>
                                <Space />
                                <Link {...{
                                href: 'http://omega-doc.qulongjun.com/'
                                }}>Omega 中文文档</Link>
                                <Space />
                                <Link {...{
                                href: 'http://omega.qulongjun.com/'
                                }}>Omega 官方示例</Link>
                                </Section>
                                <Space size="50"/>
                                </Portlet>
                                {/*<Portlet _includeStyle={{height: '500px',paddingLeft:'300px',paddingTop:'300px'}}>*/}
                                    {/*<Dropdown {...{*/}
                                        {/*button: {*/}
                                            {/*value:'Dropdown - Left',*/}
                                            {/*btnColor:'success'*/}
                                        {/*},*/}
                                        {/*toggle: 'click',*/}
                                        {/*persistent: true,*/}
                                        {/*hoverTimeout: 80000,*/}
                                        {/*direction:"left",*/}
                                        {/*size:'huge'*/}
                                    {/*}}>*/}
                                        {/*<Nav {...{*/}
                                            {/*items: [{*/}
                                                {/*type: 'section',*/}
                                                {/*text: {*/}
                                                    {/*value: 'SECTION 1',*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-share'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'Activity',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-chat-1'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'Message',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-info'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'FAQ',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*type: 'section',*/}
                                                {/*text: {*/}
                                                    {/*value: 'SECTION 2',*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-cogwheel-2'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'Settings',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-lifebuoy'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'Support',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*icon: {*/}
                                                    {/*show: true,*/}
                                                    {/*name: 'flaticon-interface-1'*/}
                                                {/*},*/}
                                                {/*text: {*/}
                                                    {/*value: 'Logs',*/}
                                                    {/*href: '#'*/}
                                                {/*}*/}
                                            {/*}, {*/}
                                                {/*type: 'separator'*/}
                                            {/*}, {*/}
                                                {/*type: 'other',*/}
                                                {/*text: {*/}
                                                    {/*value: (<Button {...{*/}
                                                        {/*btnColor: 'outline-danger',*/}
                                                        {/*value: 'Logout',*/}
                                                        {/*btnStyle: 'pill',*/}
                                                        {/*size: 'sm'*/}
                                                    {/*}}/>)*/}
                                                {/*}*/}
                                            {/*}]*/}
                                        {/*}}/>*/}
                                    {/*</Dropdown>*/}
                                {/*</Portlet>*/}
                            </Div>
                        </Div>
                    </Content>
                </Wrapper>
            </Container>
        </Page>
    </Fragment>
);

export default hot(module)(App)
