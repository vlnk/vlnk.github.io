module Jekyll

  class SoundCloudPost < Post
    def initialize(site, base, dir, name, title)
      @site = site
      @base = base
      @dir = dir
      @name = name

      self.process(@name)

      self.data['title'] = title
      self.date['category'] = 'music'
    end
  end


  class SoundCloudPostGenerator < Generator
    safe true

    #dir? name? title? TODO
    def generate(site)
      #site.posts << SoundCloudPost.new(site, site.source, dir, name, title)
    end
  end
end
