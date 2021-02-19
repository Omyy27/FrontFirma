import React from 'react';
import {HiMenuAlt3} from 'react-icons/hi';
const Header = () => {
    return ( <>
    {/*begin::Header Mobile*/}
<div id="kt_header_mobile" className="header-mobile header-mobile-fixed">
  {/*begin::Logo*/}
  <a href="#">
    <img alt="Logo" src="assets/media/logos/logo-letter-1.png" className="logo-default max-h-30px" />
  </a>
  {/*end::Logo*/}
  {/*begin::Toolbar*/}
  <div className="d-flex align-items-center">
    <button className="btn p-0 burger-icon rounded-0 burger-icon-left" id="kt_aside_tablet_and_mobile_toggle">
      <span />
    </button>
    <button className="btn btn-hover-text-primary p-0 ml-3" id="kt_header_mobile_topbar_toggle">
      <span className="svg-icon svg-icon-xl">
        {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
          </g>
        </svg>
        {/*end::Svg Icon*/}
      </span>
    </button>
  </div>
  {/*end::Toolbar*/}
</div>
{/*end::Header Mobile*/}

    {/*begin::Header*/}
    <div id="kt_header" className="header header-fixed">
        {/*begin::Container*/}
        <div className="container d-flex align-items-stretch justify-content-between">
          {/*begin::Left*/}
          <div className="d-none d-lg-flex align-items-center mr-3">
            {/*begin::Aside Toggle*/}
            <button className="btn btn-icon aside-toggle ml-n3 mr-10" id="kt_aside_desktop_toggle">
              <span className="svg-icon svg-icon-xxl svg-icon-dark-75">
               <HiMenuAlt3 />
              </span>
            </button>
            {/*end::Aside Toggle*/}
            {/*begin::Logo*/}
            <a href="index.html">
              <img alt="Logo" src="assets/media/logos/logo-letter-1.png" className="logo-sticky max-h-35px" />
            </a>
            {/*end::Logo*/}
            {/*begin::Desktop Search*/}
            <div className="quick-search quick-search-inline ml-20 w-300px" id="kt_quick_search_inline">
              {/*begin::Form*/}
              <form method="get" className="quick-search-form">
                <div className="input-group rounded bg-light">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="svg-icon svg-icon-lg">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                            <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                  </div>
                  <input type="text" className="form-control h-45px" placeholder="Search..." />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="quick-search-close ki ki-close icon-sm text-muted" />
                    </span>
                  </div>
                </div>
              </form>
              {/*end::Form*/}
              {/*begin::Search Toggle*/}
              <div id="kt_quick_search_toggle" data-toggle="dropdown" data-offset="0px,1px" />
              {/*end::Search Toggle*/}
              {/*begin::Dropdown*/}
              <div className="dropdown-menu dropdown-menu-left dropdown-menu-lg dropdown-menu-anim-up">
                <div className="quick-search-wrapper scroll" data-scroll="true" data-height={350} data-mobile-height={200} />
              </div>
              {/*end::Dropdown*/}
            </div>
            {/*end::Desktop Search*/}
          </div>
          {/*end::Left*/}
          {/*begin::Topbar*/}
          <div className="topbar">
            {/*begin::Tablet & Mobile Search*/}
            <div className="dropdown d-flex d-lg-none">
              {/*begin::Toggle*/}
              <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                  <span className="svg-icon svg-icon-xl">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </div>
              </div>
              {/*end::Toggle*/}
              {/*begin::Dropdown*/}
              <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                <div className="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
                  {/*begin:Form*/}
                  <form method="get" className="quick-search-form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <rect x={0} y={0} width={24} height={24} />
                                <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Search..." />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="quick-search-close ki ki-close icon-sm text-muted" />
                        </span>
                      </div>
                    </div>
                  </form>
                  {/*end::Form*/}
                  {/*begin::Scroll*/}
                  <div className="quick-search-wrapper scroll" data-scroll="true" data-height={325} data-mobile-height={200} />
                  {/*end::Scroll*/}
                </div>
              </div>
              {/*end::Dropdown*/}
            </div>
            {/*end::Tablet & Mobile Search*/}
            {/*begin::Create*/}
            <div className="dropdown">
              {/*begin::Toggle*/}
              <div className="topbar-item mr-4" data-toggle="dropdown" data-offset="10px,0px">
                <div className="btn font-weight-bolder btn-sm btn-light-success px-5">Create</div>
              </div>
              {/*end::Toggle*/}
              
            </div>
            {/*end::Create*/}
            {/*begin::Quick Panel*/}
            <div className="topbar-item mr-4">
              <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75 btn-dropdown" id="kt_quick_panel_toggle">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Media/Equalizer.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" opacity="0.3" x={13} y={4} width={3} height={16} rx="1.5" />
                      <rect fill="#000000" x={8} y={9} width={3} height={11} rx="1.5" />
                      <rect fill="#000000" x={18} y={11} width={3} height={9} rx="1.5" />
                      <rect fill="#000000" x={3} y={13} width={3} height={7} rx="1.5" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </div>
            </div>
            {/*end::Quick Actions*/}
            {/*begin::Quick Actions*/}
            <div className="topbar-item mr-4">
              <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75" id="kt_quick_actions_toggle">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                      <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </div>
            </div>
            {/*end::Quick panel*/}
            {/*begin::User*/}
            <div className="topbar-item mr-4">
              <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75" id="kt_quick_user_toggle">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <polygon points="0 0 24 0 24 24 0 24" />
                      <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                      <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </div>
            </div>
            {/*end::User*/}
            {/*begin::Notifications*/}
            <div className="topbar-item">
              <div className="btn btn-icon btn-sm btn-primary font-weight-bolder p-0" id="kt_quick_notifications_toggle">3</div>
            </div>
            {/*end::Notifications*/}
          </div>
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header*/}
    
    </> );
}
 
export default Header;