import {memo} from 'react';

type TechIconProps = {
  icon: React.ComponentType<any>;
  label: string;
};

// const getIconColor = (tech: string) => {
//   const greyColor = '#888888';
//   const colors = {
//     PHP: greyColor,
//     'C#': greyColor,
//     JavaScript: greyColor,
//     React: greyColor,
//     Redux: greyColor,
//     Node: greyColor,
//     MSQL: greyColor,
//     Typescript: greyColor,
//     Saga: greyColor,
//     Docker: greyColor,
//     SQL: greyColor,
//     GitLab: greyColor
//   };
//   return colors[tech as keyof typeof colors] || '#4A5568';
// };

export const TechIcon = memo(({icon: Icon, label}: TechIconProps) => (
  <span className="relative group inline-flex items-center">
    <Icon
      className="mr-2 text-2xl transition-transform hover:scale-110"
      // style={{color: getIconColor(label)}}
    />
    <span
      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-max 
                       text-white bg-gray-800/90 rounded-md text-sm py-1 px-2 
                       opacity-0 group-hover:opacity-100 transition-opacity 
                       shadow-lg pointer-events-none"
    >
      {label}
    </span>
  </span>
));
