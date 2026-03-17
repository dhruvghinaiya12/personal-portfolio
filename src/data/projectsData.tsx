import React from 'react';
import { ShoppingCart, Hotel, Users, MessageSquare, Server } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  role: string;
  goal: string;
  fullDescription: string;
  techStack: string[];
  keyFeatures: string[];
  detailedFeatures?: {
    title: string;
    description: string;
    points?: string[];
  }[];
  githubLinks: {
    label: string;
    url: string;
  }[];
  image: string;
  icon: React.ReactNode;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-admin',
    title: 'E-commerce Admin Panel',
    shortDescription: 'Full-featured admin dashboard managing products, orders, customers, and store operations with advanced role-based access control.',
    role: 'Built a full-featured admin dashboard to manage products, orders, customers, categories and store content for an online store.',
    goal: 'Give non-technical staff a clean, secure, data-driven interface to operate the entire e-commerce business.',
    fullDescription: 'Built a full-featured admin panel using Next.js, React, TypeScript, Tailwind CSS, Prisma and PostgreSQL to manage products, orders, customers, inventory and store content. Implemented advanced modules for multi-variant product management, order lifecycle and invoice generation, customer analytics, returns and payments, all secured with Supabase-based authentication and role-based access control.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'Redux Toolkit',
      'Razorpay'
    ],
    keyFeatures: [
      'Dashboard with business metrics and analytics',
      'Multi-variant product management with image uploads',
      'Order lifecycle management with invoice generation',
      'Customer analytics and management',
      'Role-based access control (RBAC)',
      'Returns and payment processing',
      'Blog content management',
      'Announcement bar configuration'
    ],
    detailedFeatures: [
      {
        title: 'Dashboard',
        description: 'Central control panel showing business health at a glance',
        points: [
          'Key ecommerce metrics: orders by status, revenue, items sold, customer growth',
          'Real-time analytics for immediate operational insights',
          'Quick navigation to detailed modules'
        ]
      },
      {
        title: 'Product Management',
        description: 'Complete product lifecycle with variants and SEO',
        points: [
          'Multi-variant products with independent pricing, stock, and SKUs',
          'Image upload and management',
          'Category assignment and tagging',
          'SEO optimization with meta fields',
          'Rich product descriptions and benefits'
        ]
      },
      {
        title: 'Order Management',
        description: 'End-to-end order fulfillment workflow',
        points: [
          'Status pipeline: Placed → Confirmed → Processing → Shipped → Delivered',
          'Invoice generation and printing',
          'Inventory adjustments on status changes',
          'Advanced filtering by status, customer, date range'
        ]
      },
      {
        title: 'User Permission System',
        description: 'Fine-grained role-based access control',
        points: [
          'Module-level permissions (Dashboard, Products, Orders, etc.)',
          'Action-level controls (Create, Update, Delete)',
          'UI and API-level enforcement',
          'Super Admin full control'
        ]
      }
    ],
    githubLinks: [
      {
        label: 'Admin Panel',
        url: 'https://github.com/dhruvghinaiya12/Ecommerce-platform/tree/master/admin'
      },
      {
        label: 'User Panel',
        url: 'https://github.com/dhruvghinaiya12/Ecommerce-platform/tree/master/userpanel'
      }
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    icon: <ShoppingCart className="text-blue-600" size={24} />
  },
  {
    id: 'ecommerce-user',
    title: 'Global E-commerce User Panel',
    shortDescription: 'Production-ready customer storefront with dynamic catalog, multi-language support, and complete checkout experience.',
    role: 'Built a production e-commerce user panel with full shopping experience.',
    goal: 'Deliver a global-ready, dynamic shopping experience with advanced filtering, multilingual support, and seamless checkout.',
    fullDescription: 'Built a production e-commerce user panel using React + TypeScript with Redux Toolkit and Axios-based APIs. Implemented a fully dynamic product catalogue (search, category filtering, price range, sorting, pagination), product details with variants, stock-aware quantity selection, cart sidebar, and complete checkout + order history flow. Added customer reviews, blog, contact/support form, and a backend-controlled announcement bar. Delivered a global-ready UX with region/language switcher, IP-based defaults, Google-Translate SPA synchronization, SEO via React Helmet, responsive Tailwind UI.',
    techStack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Axios',
      'Tailwind CSS',
      'React Router',
      'React Helmet',
      'Google Translate API',
      'Razorpay'
    ],
    keyFeatures: [
      'Dynamic product catalog with advanced filtering',
      'Multi-variant product details',
      'Real-time cart and checkout',
      'Customer reviews and ratings',
      'Multi-language and region support',
      'SEO optimization',
      'Blog integration',
      'Order history and tracking'
    ],
    detailedFeatures: [
      {
        title: 'Product Discovery',
        description: 'Powerful search and filtering capabilities',
        points: [
          'Real-time search with debouncing',
          'Category-based filtering',
          'Price range and rating filters',
          'Sort by price, rating, newest',
          'Pagination with smooth scrolling'
        ]
      },
      {
        title: 'Global Experience',
        description: 'Multi-language and region support',
        points: [
          'Region and language selector',
          'IP-based automatic detection',
          'Google Translate integration',
          'Localized content and currency'
        ]
      },
      {
        title: 'Shopping Experience',
        description: 'Complete e-commerce flow',
        points: [
          'Stock-aware quantity selection',
          'Variant-specific pricing and images',
          'Persistent cart with sidebar',
          'Secure checkout with Razorpay',
          'Order history and tracking'
        ]
      }
    ],
    githubLinks: [
      {
        label: 'User Panel',
        url: 'https://github.com/dhruvghinaiya12/Ecommerce-platform/tree/master/userpanel'
      }
    ],
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg',
    icon: <ShoppingCart className="text-blue-600" size={24} />
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management System',
    shortDescription: 'Multi-tenant restaurant platform with QR-based ordering, real-time notifications, and role-based dashboards.',
    role: 'Built a comprehensive restaurant management system with multi-tenant architecture.',
    goal: 'Enable restaurants to manage operations with QR-based customer orders, staff coordination, and real-time updates.',
    fullDescription: 'A restaurant is created by the Super Admin, who assigns a plan and provisions the initial Admin. Admin logs in, configures tables and menu, and adds Managers. Admin generates QR codes for tables. Customers scan QR to view tenant-branded menu. Managers open orders for tables; tables and order states update; Admins see real-time order notifications. Admin creates invoices when payment is done; table becomes free. Support tickets enable communication between Admin and Super Admin with real-time chat notifications.',
    techStack: [
      'Next.js 15',
      'React 19',
      'Tailwind CSS v4',
      'Radix UI',
      'Redux Toolkit',
      'Drizzle ORM',
      'PostgreSQL',
      'Supabase Realtime',
      'better-auth',
      'react-hook-form',
      'Zod'
    ],
    keyFeatures: [
      'Multi-tenant architecture',
      'QR-based digital menu',
      'Role-based dashboards (Super Admin, Admin, Manager)',
      'Real-time order notifications',
      'Table and order management',
      'Invoice generation',
      'Support ticket system',
      'Staff management'
    ],
    detailedFeatures: [
      {
        title: 'Multi-Tenant System',
        description: 'Each restaurant operates independently',
        points: [
          'Restaurant-specific branding and menu',
          'Isolated data per tenant',
          'Subscription-based plans',
          'QR code generation per restaurant'
        ]
      },
      {
        title: 'Role-Based Access',
        description: 'Three distinct user roles',
        points: [
          'Super Admin: Manage all restaurants and plans',
          'Admin: Full restaurant control, staff, menu, orders',
          'Manager: Operational tasks, order creation, status updates'
        ]
      },
      {
        title: 'Real-time Operations',
        description: 'Live updates via Supabase Realtime',
        points: [
          'Instant order notifications',
          'Table status updates',
          'Invoice notifications',
          'Chat-style support messages'
        ]
      }
    ],
    githubLinks: [
      {
        label: 'Restaurant Management',
        url: 'https://github.com/dhruvghinaiya12/Hotel-management'
      }
    ],
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    icon: <Hotel className="text-blue-600" size={24} />
  },
  {
    id: 'lead-management',
    title: 'Dr.Links - Lead Management',
    shortDescription: 'Healthcare referral platform with QR-based lead capture, role-based workflows, and subscription billing.',
    role: 'Built a full-stack lead capture and referral system for healthcare networks.',
    goal: 'Connect doctors with patients through a multi-role referral system with QR-based lead intake and subscription management.',
    fullDescription: 'Built a full-stack lead capture and referral system for healthcare networks with Super Admin, PRO, Consultant Doctor, Referral Doctor, and Sub User roles. Implemented QR/link-based lead intake, role-based dashboards, lead lifecycle management (status, priority, appointment slots, follow-ups, audit history), sub-user permission delegation, and Razorpay subscription billing with feature gating, using React (Vite/Redux) and Node.js/Express + MongoDB + JWT.',
    techStack: [
      'React 18',
      'Vite',
      'Redux Toolkit',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Socket.IO',
      'Razorpay',
      'MUI',
      'Ant Design',
      'Bootstrap'
    ],
    keyFeatures: [
      'Five role-based dashboards',
      'QR-based lead generation',
      'Lead lifecycle management',
      'Appointment scheduling',
      'Sub-user permission system',
      'Razorpay subscription billing',
      'Follow-up tracking',
      'Real-time notifications'
    ],
    detailedFeatures: [
      {
        title: 'Role System',
        description: 'Five distinct user types with specific permissions',
        points: [
          'Super Admin: Platform management, doctor onboarding',
          'PRO: Lead generation via QR codes',
          'Consultant Doctor: Lead management, billing, sub-users',
          'Referral Doctor: Submit patient leads',
          'Sub User: Delegated permissions from Consultant'
        ]
      },
      {
        title: 'Lead Management',
        description: 'Complete lead lifecycle',
        points: [
          'QR/link-based lead capture',
          'Status tracking (NEW → progress → closed)',
          'Priority and category assignment',
          'Appointment slot scheduling',
          'Follow-up reminders',
          'Update history audit trail'
        ]
      },
      {
        title: 'Subscription System',
        description: 'Razorpay-powered billing',
        points: [
          'Category-based subscription plans',
          'Feature gating based on subscription status',
          'Automated subscription management',
          'Payment tracking and reporting'
        ]
      }
    ],
    githubLinks: [
      {
        label: 'Lead Management System',
        url: 'https://github.com/dhruvghinaiya12/Lead-management'
      }
    ],
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    icon: <Users className="text-blue-600" size={24} />
  },
  {
    id: 'whatsapp-service',
    title: 'WhatsApp Cloud API CRM',
    shortDescription: 'Multi-tenant WhatsApp campaign manager with real-time inbox, template builder, and delivery tracking.',
    role: 'Built a multi-tenant admin dashboard for WhatsApp Cloud API management.',
    goal: 'Enable businesses to manage WhatsApp communications with contacts, templates, campaigns, and real-time messaging.',
    fullDescription: 'Built a multi-tenant admin dashboard to manage WhatsApp API credentials, contacts/groups, approved templates, 1:1 inbox messaging, and bulk template campaigns (instant + scheduled). Implemented webhook-driven inbound message ingestion and delivery/read status tracking with real-time UI updates via Socket.IO, backed by Node/Express and MongoDB.',
    techStack: [
      'React 18',
      'Chakra UI',
      'Redux',
      'Socket.IO',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'WhatsApp Cloud API',
      'node-cron',
      'Cloudinary',
      'JWT'
    ],
    keyFeatures: [
      'Multi-tenant architecture',
      'WhatsApp Cloud API integration',
      'Contact and group management',
      'Template management',
      'Real-time inbox messaging',
      'Bulk campaign scheduling',
      'Delivery status tracking',
      'Excel import/export'
    ],
    detailedFeatures: [
      {
        title: 'Contact Management',
        description: 'CRM-style contact organization',
        points: [
          'Create/update/delete contacts',
          'Import from Excel with duplicate detection',
          'Group-based organization',
          'Subscription status tracking',
          'Export capabilities'
        ]
      },
      {
        title: 'Real-time Inbox',
        description: 'Live WhatsApp messaging',
        points: [
          'Socket.IO real-time updates',
          'Webhook-driven message ingestion',
          'Delivery and read status tracking',
          '24-hour messaging window enforcement',
          'Unread message indicators'
        ]
      },
      {
        title: 'Campaign System',
        description: 'Bulk template messaging',
        points: [
          'Instant and scheduled campaigns',
          'Variable mapping per contact',
          'Media header support',
          'Campaign analytics and logs',
          'Automated scheduling with cron'
        ]
      }
    ],
    githubLinks: [
      {
        label: 'WhatsApp Service',
        url: 'https://github.com/dhruvghinaiya12/Whatsapp-Template'
      }
    ],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    icon: <MessageSquare className="text-blue-600" size={24} />
  }
];
