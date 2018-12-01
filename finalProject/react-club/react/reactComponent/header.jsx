class Header extends React.Component {
    render() {
        // console.log(this.props.children)
        return (
            <header>
                <nav>
                    <ul className="clearfix">
                        <li><Link to="./">首页</Link></li>
                        <li><Link to="/case">案例成效</Link></li>
                        <li><Link to="/corp">合作交流</Link></li>
                        <li><Link to="/news">新闻动态</Link></li>
                        <li><Link to="/friends">合作伙伴</Link></li>
                        <li><Link to="/about">关于我们</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

function Header(){
    return (
        <Header/>
    )
}

module.export = Header;