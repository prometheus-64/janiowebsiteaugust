import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import {
  FileText,
  BookOpen,
  Award,
  LogOut,
  Shield,
  User
} from 'lucide-react';

export default function AdminDashboard() {
  const { authenticated, mfaRequired, loading, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !authenticated) {
      navigate('/admin/login');
    } else if (!loading && mfaRequired) {
      navigate('/admin/mfa-verify');
    }
  }, [authenticated, mfaRequired, loading, navigate]);

  if (loading || !authenticated || mfaRequired) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  const contentTypes = [
    {
      title: 'Blogs',
      description: 'Manage blog posts and articles',
      icon: FileText,
      link: '/admin/blogs',
      count: '—',
    },
    {
      title: 'Case Studies',
      description: 'Manage client success stories',
      icon: Award,
      link: '/admin/case-studies',
      count: '—',
    },
    {
      title: 'Guides',
      description: 'Manage educational guides',
      icon: BookOpen,
      link: '/admin/guides',
      count: '—',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <h1 className="text-2xl font-bold">Janio CMS</h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-2 text-sm">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                  <div className="hidden md:block">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-muted-foreground text-xs">{user.email}</div>
                  </div>
                </div>
              )}
              <Button variant="outline" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name?.split(' ')[0]}!</h2>
          <p className="text-muted-foreground">
            Manage your content from the dashboard below
          </p>
        </div>

        {/* Content Type Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contentTypes.map((type) => (
            <Link key={type.title} to={type.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <type.icon className="w-8 h-8 text-primary" />
                    <span className="text-2xl font-bold text-muted-foreground">
                      {type.count}
                    </span>
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Manage {type.title}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link to="/admin/blogs/new">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Create New Blog Post
              </Button>
            </Link>
            <Link to="/admin/case-studies/new">
              <Button variant="outline" className="w-full justify-start">
                <Award className="w-4 h-4 mr-2" />
                Add New Case Study
              </Button>
            </Link>
            <Link to="/admin/guides/new">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Create New Guide
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
