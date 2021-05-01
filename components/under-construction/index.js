import { Spring } from 'react-spring/renderprops-universal.cjs';

export const UnderConstruction = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center m-36">
      <Spring
        from={{ x: 100, m1: 300, m2: 434 }}
        to={{ x: 0, m1: 506, m2: 324 }}>
        {({ x, m1, m2 }) => (
          <svg
            viewBox="0 0 512.00003 512"
            width="120pt"
            height="110px"
            xmlns="http://www.w3.org/2000/svg"
            strokeDashoffset={x}>
            <path
              d={
                'm' +
                m1 +
                ' 316.320312c-3.253906-1.292968-6.96875-.484374-9.386718 2.046876l-36.445313 38.308593v-227.542969h.042969l34.773438-37.546874c3.199218-3.457032 2.988281-8.859376-.472657-12.058594 0 0-.003906-.003906-.007812-.007813l-12.515625-11.648437 17.390625-18.773438c3.195312-3.460937 2.980469-8.859375-.480469-12.054687l-37.546875-34.773438c-3.457031-3.199219-8.855469-2.992187-12.054687.46875l-60.671876 65.511719h-295.390624c-.027344-23.554688-19.113282-42.640625-42.667969-42.667969h-8.53125c-23.554688.027344-42.6406252 19.113281-42.667969 42.667969v366.933594c0 4.710937 3.820312 8.53125 8.535156 8.53125h129.175782l-17.921876 21.519531c-3.011718 3.625-2.519531 9.003906 1.101563 12.015625l39.347656 32.761719c3.621094 3.015625 9.003907 2.523437 12.019531-1.097657 0 0 .003907-.003906.003907-.003906l43.675781-52.472656c3.015625-3.632812 4.957031-8.042969 5.597656-12.722656h156.363282l-51.285157 53.855468c-3.246093 3.414063-3.109375 8.816407.304688 12.0625 1.585937 1.507813 3.691406 2.351563 5.882812 2.347657h170.664063c4.714844 0 8.535156-3.820313 8.535156-8.53125v-179.199219c0-3.492188-2.125-6.632812-5.367188-7.929688zm-29.335937-230.152343-16.496094 17.84375v-12.550781l10.238281-11.09375zm-33.5625-1.519531v.121093l-72.167969 77.996094-25.0625-23.1875 86.9375-93.953125 25.0625 23.1875-14.667968 15.835938zm-88.558594 86.1875-19.628906 5.726562 4.191406-20.019531zm101.453125-150.261719 25.050782 23.175781-11.59375 12.550781-25.054688-23.199219zm-413.960937 22.074219h8.53125c14.140625 0 25.601562 11.460937 25.601562 25.601562v324.488281c-7.34375-5.648437-16.339843-8.726562-25.601562-8.757812h-8.53125c-9.265625.03125-18.257813 3.109375-25.601563 8.757812v-324.488281c0-14.140625 11.460938-25.601562 25.601563-25.601562zm0 358.398437h8.53125c14.140625 0 25.601562 11.464844 25.601562 25.601563h-59.734375c0-14.136719 11.460938-25.601563 25.601563-25.601563zm160.160156 44.476563-5.460937 6.554687-26.230469-21.835937 5.453125-6.5625c3.015625-3.621094 8.394531-4.113282 12.015625-1.097657.003906 0 .003906.003907.007812.003907l13.113281 10.890624c3.625 3.011719 4.121094 8.390626 1.109376 12.015626-.003907.003906-.003907.003906-.007813.007812zm-38.21875 45.910156-26.234375-21.835938 21.839844-26.242187 26.230468 21.839843zm53.339844-64.785156c-1.417969-2.363282-3.210938-4.476563-5.308594-6.261719l-13.113281-10.914063c-10.867188-9.046875-27.007813-7.574218-36.054688 3.292969l-11.578125 13.882813h-58.027343v-341.332032h279.601562l-45.285156 48.9375c-.648438.730469-1.164063 1.574219-1.519532 2.484375-.101562.246094-.179687.476563-.265624.734375-.082032.253906-.210938.511719-.273438.785156l-10.1875 48.707032c-.960938 4.613281 2 9.132812 6.613281 10.09375 1.371094.285156 2.789063.230468 4.128907-.160156l47.789062-13.925782c.222656-.070312.410156-.199218.621094-.273437.214844-.078125.4375-.1875.667968-.300781.957032-.433594 1.824219-1.046876 2.558594-1.800782l65.417969-70.699218v264.695312l-49.578125 52.054688zm276.984375 68.265624h-142.226563l142.226563-149.332031zm0 0'
              }
            />
            <path d="m401.714844 472.582031c1.320312 3.1875 4.433594 5.265625 7.886718 5.265625h59.730469c4.714844 0 8.535157-3.820312 8.535157-8.53125v-59.734375c0-4.714843-3.824219-8.53125-8.535157-8.53125-2.261719 0-4.433593.898438-6.03125 2.5l-59.734375 59.730469c-2.441406 2.441406-3.171875 6.113281-1.851562 9.300781zm59.085937-42.402343v30.601562h-30.601562zm0 0" />
            <path
              d={
                'm375.464844 ' +
                m2 +
                'h-59.730469v-93.867188c-.011719-2.265624-.914063-4.4375-2.511719-6.042968l-51.199218-51.199219c-3.332032-3.332031-8.734376-3.332031-12.066407 0l-51.199219 51.199219c-1.589843 1.609375-2.484374 3.78125-2.492187 6.042968v93.867188h-59.730469c-4.714844 0-8.535156 3.820312-8.535156 8.53125 0 4.714844 3.820312 8.535156 8.535156 8.535156h238.933594c4.710938 0 8.53125-3.820312 8.53125-8.535156 0-4.710938-3.820312-8.53125-8.535156-8.53125zm-119.464844-133.003906 30.601562 30.601562h-61.203124zm-42.667969 47.667968h85.335938v85.335938h-85.335938zm0 0'
              }
            />
            <path d="m247.464844 136.515625h17.070312v17.066406h-17.070312zm0 0" />
            <path d="m247.464844 358.382812h17.070312v17.066407h-17.070312zm0 0" />
          </svg>
        )}
      </Spring>
      <div className="flex mt-4 items-center justify-center">
        Under Construction
      </div>
    </div>
  );
};
