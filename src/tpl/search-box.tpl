 <!--搜索开始 -->
    <div class="top-container">
        <div class="container-24">
            <div class="grid-9">
                <div class="logo-box inner">
                    <h1><a href="index.html" title="中国移动经营分析系统" class="logo-img"><span class="icons-logo-inner"></span></a><span>中国移动经营分析系统</span></h1>
                </div>
            </div>
            <div class="grid-15">
                <form id="select">
                    <div class="select-inner">
                        <div class="select-fixed-inner">
                            <select class="select-fixed-145px-inner">
                                <option value="menu">应用</option>
                                <option value="topic">话题</option>
                                <option value="callBoard">公告</option>
                            </select>
                        </div>
                        <input class="search-input-inner" id="searcg-value"></input>
                        <button class="search-button-inner" id="search-btb"><span class="icons-Loupe2 icons-item"></span>搜索一下</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     <script>
    $(document).ready(function() {
        /*selec美化*/
        $('.select-fixed-145px-inner').Selectyze({
            theme: 'skype'
        });
    });
    </script>
    <!--搜索结束 -->